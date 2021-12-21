#####################################
#                                   #
#               Base                #
#                                   #
#####################################

FROM node:16-alpine AS base

RUN apk update && \
    apk add --no-cache tini && \
    apk add --no-cache libc6-compat

ENTRYPOINT ["/sbin/tini", "--"]

#####################################
#                                   #
#               BUILD               #
#                                   #
#####################################

FROM base AS build

# When using private npm packages this is needed
ARG NPM_TOKEN

RUN mkdir -p ./src/build
WORKDIR ./src/build

# Main config files
COPY package*.json ./
COPY next.config.js ./
COPY .eslintrc.json ./

RUN if [ -z "$NPM_TOKEN" ]; then echo "NPM_TOKEN is not SET"; exit 1; else : ; fi

RUN printf "//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n" >> .npmrc && \
    npm cache verify && \
    npm ci && \
    rm -f .npmrc

COPY ./src ./src
COPY ./pages ./pages
COPY ./public ./public
COPY ./styles ./styles

# Build the app
RUN npm run build

# Remove all unwanted dependancies
# and audit the modules to check for
# any invulnerabilities, this should fail
# upon finding one in production...
RUN npm prune --production && \
    npm audit --production

#####################################
#                                   #
#            Deployment             #
#                                   #
#####################################

FROM base

# Just to add something for versioning
ARG DOCKER_TAG
ARG SOURCE_BRANCH
ARG SOURCE_COMMIT

ENV DOCKER=true
ENV NODE_ENV=production
ENV DOCKER_TAG=$DOCKER_TAG
ENV SOURCE_BRANCH=$SOURCE_BRANCH
ENV SOURCE_COMMIT=$SOURCE_COMMIT

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=build /src/build/next.config.js ./
COPY --from=build /src/build/public ./public
COPY --from=build --chown=nextjs:nodejs /src/build/.next ./.next
COPY --from=build /src/build/node_modules ./node_modules
COPY --from=build /src/build/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]
