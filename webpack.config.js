const path = require('path');

module.exports = {
  entry: {
    narwhal: [path.resolve(__dirname, 'src/main.ts')],
  },
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};
