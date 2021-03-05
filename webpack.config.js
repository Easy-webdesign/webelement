const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: 'assets/'
}

const PAGES_DIR = PATHS.src;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'));




module.exports = {
    mode: 'production',
    // entry: path.resolve(__dirname, 'src/js/app.js'),
    entry:{
      app: './src/js/app'
    },
    output: {
        path: __dirname + '/dist',
        filename: './js/[name].js',
        library: '[name]'
    },

    watch: true,

    performance: { hints: false },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../'
                    }
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      // importLoaders: 1,
                      sourceMap: true,
                    },
                  },
                ],
              },
            // {
            //   test: /\.js$/,
            //   loader: 'babel-loader'
            // },
            { 
              test: /\.(woff|woff2|eot|ttf)$/, 
              use: [{
                loader: 'url-loader',
                options: {
                  limit:  1024,
                  name: 'fonts/[name].[ext]',
                  
                }
              }]
            },

            { 
              test: /\.(png|svg)$/, 
              use: [{
                loader: 'url-loader',
                options: {
                  limit: 1024,
                  name: '[ext]' === 'png' ? 'img/[name].[ext]' : 'icons/[name].[ext]',
                }
              }]
            },
        ],
        
    },

    plugins: [
        ...PAGES.map((page) => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page}`,
            inject: true,
            minify: false,
        })),
        new MiniCssExtractPlugin({filename: 'css/style.css'}),
        new CopyWebpackPlugin([{ from: "src/img", to: "img" }], {}),
        new CopyWebpackPlugin([{ from: "src/icons", to: "icons" }], {}),
    ],
};