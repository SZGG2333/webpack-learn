const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devtool: false,
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'ttp://localhost:8081/dist/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './utils': './src/utils',
        './foo': './src/foo',
      },
      shared: {
        lodash: {
          requiredVersion: '^4.17.0',
          shareScope: 'foo'
        }
      }
    })
  ],
  devServer: {
    port: 8081,
    hot: true
  }
}