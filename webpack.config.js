/* global __dirname */
var path = require('path');

var config = {
    context: __dirname,
    devtool : 'source-map',
    entry: {
        'bundle': ['./src/index.js'],
    },
    output : {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                exclude: /node_modules/,
            }
        ]
    },  
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};

module.exports = config;