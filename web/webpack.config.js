 var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: './src/main.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader'
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };