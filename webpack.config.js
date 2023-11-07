const path = require('path')
const EslintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        include: {
          and: [path.join(__dirname, './src/')]
        },
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript']
            }
          }
        ],
      },
      {
        test: /\.ts/i,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [new EslintPlugin()]
}