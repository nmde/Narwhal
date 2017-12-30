/* eslint import/extensions: ["off"] */
import nodeGlobals from 'rollup-plugin-node-globals';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: './src/main.ts',
  dest: './dist/narwhal.js',
  external: [
    'async',
    'fetter-js',
    'request',
  ],
  plugins: [
    nodeGlobals(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
  moduleName: 'Narwhal',
  format: 'cjs',
};
