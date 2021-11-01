
### webpack.config.js vs code에서 자동완성 사용하기  

https://joshuatz.com/posts/2020/vscode-intellisense-autocomplete-for-webpack-config-files/  

```
const path = require('path')

/**@type {import('webpack').Configuration} */
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },
    mode: 'production',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
};
```

### 동일한 빌드 여러번 돌렸을때 번들파일 해시값의 변화 체크

```
output.filename: 'bundle_[hash].js' 
```
[hash][chunkhash] 황용해 이렇게 위와 같이 지정했을 경우 동일한 소스파일 대상으로는 동일한 해시값이 떨어진다.
그리고 해시의 특징상 극히 일부의 소스가 바뀌어도 해시값은 완전히 바뀐다. 
  
?[chunkhash]는 뭐지