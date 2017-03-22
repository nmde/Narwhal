const ClosureCompiler = require('webpack-closure-compiler');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'narwhal.js',
    path: './dist',
  },
  externals: [
    {
      blessed: true,
      parse5: true,
    },
  ],
  module: {
    rules: [
      {
        test: /\.node$/,
        use: 'node-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ClosureCompiler({
      language_in: 'ECMASCRIPT6',
      language_out: 'ECMASCRIPT5',
      compilation_level: 'ADVANCED',
    }),
  ],
  target: 'node',
};
