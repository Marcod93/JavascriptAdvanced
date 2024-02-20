const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');

module.exports = {
    entry:{
        index:'./src/js/index.js'
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Corso Javascript Advanced',
            template: './src/index.html'
        })

    ],
    devServer:{
        port:5000,
        open: true,
        static: path.resolve(__dirname, 'dist')

    }
}