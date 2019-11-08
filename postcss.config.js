const postcssPresetEnv = require('postcss-preset-env');
const postcssImports = require("postcss-import");
const styleLint = require("stylelint");


module.exports = {
    plugins: [
        styleLint,
        postcssImports,
        postcssPresetEnv({
            autoprefixer: { grid: true }
        })
    ]
};
