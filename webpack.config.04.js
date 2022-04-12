const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 코드 스플리팅 SplitChunksPlugin
// optimization.splitChunks.chunks

module.exports = {
    mode: 'development',
    entry: {
        index: './src/03_Spliting/index.js',
        another: './src/03_Spliting/another_module.js',
        another2: './src/03_Spliting/another_module2.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/03_Spliting_SplitChunksPlugin'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    // 아래 옵션을 적용하면 lodash가 별도의 번들로 분리된다.
    // src/03_Spliting/module.js 엔트리에서 공통적으로 사용하는 이 모듈은 특별히 분리되거나 하지않고 각 번들에 심어진다.
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};