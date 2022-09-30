const postcssImport = require("postcss-import");
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({ stage: 0 })
  ]
}
