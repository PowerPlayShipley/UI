import Joi from 'joi'

/**
 * @typedef {Object} DataOffset
 *
 * @param {string} [top]
 * @param {string} [right]
 * @param {string} [bottom]
 * @param {string} [left]
 * */

/**
 * @typedef {Object} TooltipData
 *
 * @param {string} tooltip
 * @param {string} [place]
 * @param {string} [type]
 * @param {string} [effect]
 * @param {string} [event]
 * @param {string} [eventOff]
 * @param {boolean} [isCapture]
 * @param {DataOffset} [offset]
 * @param {string} [padding]
 * @param {boolean} [multiline]
 * @param {string} [className]
 * @param {boolean} [html]
 * @param {number} [delayHide]
 * @param {number} [delayShow]
 * @param {number} [delayUpdate]
 * @param {string} [border]
 * @param {string} [textColor]
 * @param {string} [backgroundColor]
 * @param {string} [borderColor]
 * @param {string} [arrowColor]
 * @param {boolean} [disable]
 * @param {boolean} [scrollHide]
 * */

const tooltipKey = Object.assign({}, {
  tooltip: { attr: 'data-tip', type: Joi.string() },
  place: { attr: 'data-place', type: Joi.string().valid('top', 'right', 'bottom', 'left') },
  type: { attr: 'data-type', type: Joi.string().valid('dark', 'success', 'warning',' error', 'light', 'info') },
  effect: { attr: 'data-effect', type: Joi.string().valid('float', 'solid') },
  event: { attr: 'data-event', type: Joi.string() },
  eventOff: { attr: 'data-event-off', type: Joi.string() },
  isCapture: { attr: 'data-iscapture', type: Joi.boolean() },
  offset: {
    attr: 'data-offset',
    type: Joi.object({ top: Joi.string(), right: Joi.string(), bottom: Joi.string(), left: Joi.string() })
  },
  padding: { attr: 'data-padding', type: Joi.string() },
  multiline: { attr: 'data-multiline', type: Joi.boolean() },
  className: { attr: 'data-class', type: Joi.string() },
  html: { attr: 'data-html', type: Joi.boolean() },
  delayHide: { attr: 'data-delay-hide', type: Joi.number() },
  delayShow: { attr: 'data-delay-show', type: Joi.number() },
  delayUpdate: { attr: 'data-delay-update', type: Joi.number() },
  border: { attr: 'data-border', type: Joi.boolean() },
  textColor: { attr: 'data-text-color', type: Joi.string() },
  backgroundColor: { attr: 'data-background-color', type: Joi.string() },
  borderColor: { attr: 'data-border-color', type: Joi.string() },
  arrowColor: { attr: 'data-arrow-color', type: Joi.string() },
  disable: { attr: 'data-tip-disable', type: Joi.boolean() },
  scrollHide: { attr: 'data-scroll-hide', type: Joi.boolean() }
})

/**
 * Take an object that comes from the server or a component
 * and convert them to the correct attributes for ReactTooltip
 *
 * @note Also comes with validation that will only work with the dev env
 *
 * @param {TooltipData} object
 * @return {Object}
 * @throws
 * */
export default function tooltip (object) {
  if (typeof object !== 'object') return { }

  const data = Object.keys(object).filter((key) => tooltipKey[key]).reduce((previousValue, currentValue) => (
    {
      tooltip: { ...previousValue.tooltip, [tooltipKey[currentValue].attr]: object[currentValue] },
      schema: { ...previousValue.schema, [tooltipKey[currentValue].attr]: tooltipKey[currentValue].type }
    }
  ), { tooltip: { }, schema: { } })

  // Validate if not in production
  if (process && process.env.NODE_ENV !== 'production') {
    return Joi.object(data.schema).validate(data.tooltip).value
  }

  return data.tooltip
}
