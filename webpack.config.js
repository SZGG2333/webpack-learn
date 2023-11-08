const path = require('path')
const EslintPlugin = require('eslint-webpack-plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    hot: true,
    open: false,
    port: 8080
  },
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
          // MiniCssExtractPlugin.loader,
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
        use: [
          'style-loader', 
          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            // options: {
            //   postcssOptions: {
            //     plugins: [require('autoprefixer')]
            //   }
            // }
          },
          'less-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.pug/,
        use: ['pug-plain-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new EslintPlugin(),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin()
  ]
}