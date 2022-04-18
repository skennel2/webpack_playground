const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 코드 스플리팅 dynamic_import

module.exports = {
    mode: 'development',
    entry: {
        index: './src/03_Spliting_dynamic_import/index.js',
        another: './src/03_Spliting_dynamic_import/another_module.js',
        another2: './src/03_Spliting_dynamic_import/another_module2.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/03_Spliting_dynamic_import'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
};