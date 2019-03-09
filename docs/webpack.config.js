const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, 'src');
const packagesPath = path.join(__dirname, '../packages');

const config = {
  mode: 'development',
  entry: [path.resolve(sourcePath, 'index.js')],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      packagesPath,
      path.resolve(__dirname, 'node_modules'),
      // yarn-workspaces
      path.resolve(__dirname, '../node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [packagesPath, sourcePath],
      },
    ],
  },
  plugins: [new webpack.NamedModulesPlugin()],
  devServer: {
    compress: false,
    host: '0.0.0.0',
    open: true,
    port: 9000,
    historyApiFallback: {
      index: path.join(__dirname, 'index.html'),
    },
  },
};

module.exports = config;
