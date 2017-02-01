const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');

module.exports = {
  plugins: [
    buble({
      objectAssign: 'Object.assign'
    }),
    commonjs(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    uglify()
  ],
  entry: './lib/index.js',
  dest: './dist/narwhal.js',
  format: 'umd',
  moduleName: 'Narwhal'
};
