/* eslint import/extensions: ["off"] */
/* eslint no-unused-vars: ["off"] */
/* eslint spaced-comment: ["off"] */
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import cleanup from 'rollup-plugin-cleanup';

const buffer = 'buffer';
const events = 'events';
const http = 'http';
const https = 'https';
const stream = 'stream';
const url = 'url';
const util = 'util';

export default {
  entry: './src/main.js',
  dest: './dist/narwhal.js',
  plugins: [
    json(),
    buble(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs(),
    //cleanup(),
    uglify(),
  ],
  external: [
    buffer,
    events,
    http,
    https,
    stream,
    'string_decoder',
    url,
    util,
  ],
  globals: {
    buffer,
    events,
    http,
    https,
    stream,
    string_decoder: 'string_decoder',
    url,
    util,
  },
  format: 'umd',
  moduleName: 'Narwhal',
};
