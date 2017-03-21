/* eslint import/extensions: ["off"] */
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const http = 'http';
const https = 'https';
const url = 'url';

export default {
  entry: './src/main.js',
  dest: './dist/narwhal.js',
  plugins: [
    buble(),
    nodeResolve(),
    commonjs(),
    uglify(),
  ],
  external: [
    http,
    https,
    url,
  ],
  globals: {
    http,
    https,
    url,
  },
  format: 'umd',
  moduleName: 'Narwhal',
};
