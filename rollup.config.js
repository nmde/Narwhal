/* eslint import/extensions: ["off"] */
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './src/main.js',
  dest: './dist/narwhal.js',
  plugins: [
    buble(),
    uglify(),
  ],
  format: 'umd',
  moduleName: 'Narwhal',
};
