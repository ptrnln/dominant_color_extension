// rollup.config.js

const { default: commonjs }= require('@rollup/plugin-commonjs');
const { default: html2canvas } = require('html2canvas');

const { default: pluginResolve } = require('@rollup/plugin-node-resolve')

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
	input: [
        "dist/scripts/page.js",
        "dist/scripts/run.js"
    ],
    output: {
        extend: true,
        dir: 'output',
        format: "iife",
        globals: {
            require$$0: require,
            html2canvas
        }
    },
    plugins: [
        pluginResolve(),
        commonjs(),
    ],
};
module.exports = config
