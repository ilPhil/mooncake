const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require("html-webpack-plugin");

require("babel-core/register");
require("babel-polyfill");

const PAGES_PATH = './src/pages';

function generateHtmlPlugins(items) {
  return items.map( (name) => new HtmlPlugin(
    {
      filename: `./${name}.html`,
      chunks: [ name ],
    }
  ))
}

module.exports = {
  entry: {
    background: [
      'babel-polyfill',
      `${PAGES_PATH}/background`,
    ],
    popup: [
      'babel-polyfill',
      `${PAGES_PATH}/popup`,
    ],
    index: [
      'babel-polyfill',
      `${PAGES_PATH}/content`,
    ]
  },
  output: {
    path: path.resolve('dist/pages'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CopyPlugin(
      [
        {
          from: 'src',
          to: path.resolve('dist'),
          ignore: [ 'pages/**/*' ]
        }
      ]
    ),
    ...generateHtmlPlugins(
      [
        'background',
        'popup'
      ]
    )
  ]
};
