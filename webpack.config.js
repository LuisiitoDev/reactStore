const path = require('path');
// with this we request the plugin previous installed
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //with this we say, what it is the main file and where it is
    output: { // with this we say, where it will be located our project and the compiled js result
        path: path.resolve(__dirname, 'dist'), // it indicates the folder name where our compiled javascript will be
        filename: 'bundle.js' // All our compiled javascript will be created with this name
    },
    resolve: { // it indicates what extensions will be listened for this compilation
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            // FIRST RULE, IT WILL BE USED TO IDENTIFY OUR JS AND JSX FILES AND THE LOADER WHICH WILL BE USED (BABEL)
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // WE CONFIGURE OUR PLUGINS TO USE
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        })
    ],
    // WE CONFIGURE OUR SERVER WHICH WILL RUN ON DEV ENVIROMENT
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3005
    }
};