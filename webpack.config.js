const path = require('path')

/**@type {import('webpack').Configuration} */
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle_[chunkhash].js',
        // emit전 아웃풋 디렉토리를 비울것인지 여부
        clean: true
    },
    mode: 'production',
    // webpack serve 명령어로 아래 옵션으로 지정된 개발서버 실행
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};
