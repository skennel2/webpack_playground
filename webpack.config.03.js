const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 코드 스플리팅
// dependOn

module.exports = {
    mode: 'development',
    entry: {
        index: {
            import: './src/03_Spliting/index.js',
            dependOn: 'shared',
        },
        another: {
            import: './src/03_Spliting/another_module.js',
            dependOn: 'shared',
        },
        // 내부에서 lodash를 사용하지만 dependOn을 지정하지 않았다.
        // 이렇게되면 해당 번들에는 lodash의 모든 내용이 포함된다.
        another2: {
            import: './src/03_Spliting/another_module2.js',
        },
        shared: 'lodash',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/03_Spliting'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    // ??? 정확히 어떤 옵션인지 모르겠다.
    // 이 옵션으로 인해 빌드 runtime.bundle.js 파일이 추가로 생겨난다.
    optimization: {
        runtimeChunk: 'single',
    },
};