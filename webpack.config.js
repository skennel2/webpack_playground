import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

// 아래 @type 어노테이션이 붙으면 설정파일 작성할때 인텔리센스 지원을 받을수 있음
/**@type {import('webpack').Configuration} */
const config = {
    // 단일 엔트리 포인트
    // entry: './index.js',
    // 멀티 엔트리 포인트
    entry: {
        entry: {
            import: './src/index.js',
            dependOn: 'module',
        },
        test: {
            import: './src/test.js',
            dependOn: 'module',
        },
        module: './src/module.js'
    },
    output: {
        // 빌드 결과물을 내릴 경로
        path: path.resolve(__dirname, 'dist'),
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
    mode: 'production',
    // webpack serve 명령어로 아래 옵션으로 지정된 개발서버 실행
    devServer: {
        static: './dist',
        // gzip 압축 활성화
        compress: true,
        port: 9000,
        hot: true,
        // liveReload: true,
        logging: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
};

export default config;
