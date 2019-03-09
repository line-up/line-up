const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, 'src');
const packagesPath = path.join(__dirname, '../packages');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          }
        ],
        include: [packagesPath, sourcePath],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    })
  ],
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
