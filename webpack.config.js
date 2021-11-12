const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**@type {import('webpack').Configuration} */
module.exports = {
    // 단일 엔트리 포인트
    entry: './index.js',
    // 멀티 엔트리 포인트
    // entry: {
    //     entry: './index.js',
    //     helloworld: './module.js'
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle_[name]_[hash].js',
        // emit전 아웃풋 디렉토리를 비울것인지 여부
        clean: true
    },
    mode: 'production',
    // webpack serve 명령어로 아래 옵션으로 지정된 개발서버 실행
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        static: './dist',
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
};
