const { debuglog } = require('util');

const LOG = debuglog('@a-la/alamode.cc')

/**
 * The website for ÀLaMode regex-based transpiler.
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
               async function alamodeCc(config) {
  const {
    type,
  } = config
  LOG('@a-la/alamode.cc called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */


module.exports = alamodeCc
//# sourceMappingURL=index.js.map