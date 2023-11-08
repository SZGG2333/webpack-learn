const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  devtool: false,
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        RemoteApp: "app1@http://localhost:8081/dist/remoteEntry.js",
      },
      shared: {
        lodash: {
          requiredVersion: '^4.17.0',
          shareScope: 'foo'
        }
      }
    }),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    port: 8082,
    hot: true
  }
}