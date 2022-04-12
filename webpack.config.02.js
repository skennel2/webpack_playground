const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 아래 @type 어노테이션이 붙으면 설정파일 작성할때 인텔리센스 지원을 받을수 있음
/**@type {import('webpack').Configuration} */
module.exports = {
    // 단일 엔트리 포인트
    // entry: './index.js',
    // 멀티 엔트리 포인트
    entry: './src/02_development/index.js',
    output: {
        // 빌드 결과물을 내릴 경로
        path: path.resolve(__dirname, 'dist/development'),
        // Hash vs chunkhash vs ContentHash
        filename: 'bundle_[name]_[chunkhash].js',
        // emit전 아웃풋 디렉토리를 비울것인지 여부
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    // development와 production으로 지정가능
    mode: 'development',
    // 인라인 소스맵 사용ㄴ\
    devtool: 'inline-source-map',
    // webpack serve 명령어로 아래 옵션으로 지정된 개발서버 실행
    devServer: {
        static: './dist/development',
        // gzip 압축 활성화
        compress: true,
        port: 9000,
        hot: true,
        // liveReload: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    // 파일이 변경되는 것을 감시하여 다시 컴파일할것인지 여부
    // false가 초기값이지만 webpack-dev-server를 사용하면 기본적으로 활성화된다.
    // serve 명령어와 함께 사용하면 true라도 에러가 발생한다.
    // watch: true
};
