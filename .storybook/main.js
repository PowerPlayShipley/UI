module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    'storybook-addon-mock/register'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
