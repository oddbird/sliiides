'use strict';

const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('rollup-plugin-babel');
const terser = require('rollup-plugin-terser').terser;

module.exports = {
  input: 'src/js/index.js',
  output: {
    file: '_built/js/scripts.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [resolve({ browser: true }), commonjs(), babel(), terser()],
};
