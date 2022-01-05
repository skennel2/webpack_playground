const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**@type {import('webpack').Configuration} */
module.exports = {
    // 단일 엔트리 포인트
    // entry: './index.js',
    // 멀티 엔트리 포인트
    entry: {
        entry: {
            import: './index.js',
            dependOn: 'module'
        },
        test: {
            import: './test.js',
            dependOn: 'module'
        },
        module: './module.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Hash vs chunkhash vs ContentHash
        filename: 'bundle_[name]_[chunkhash].js',
        // emit전 아웃풋 디렉토리를 비울것인지 여부
        // clean: true
    },
    mode: 'development',
    // webpack serve 명령어로 아래 옵션으로 지정된 개발서버 실행
    devServer: {
        static: './dist',
        // gzip 압축 활성화
        compress: true,
        port: 9000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
};
