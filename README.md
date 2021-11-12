
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

### output.filename

```
output.filename: 'bundle_[name]_[hash].js' 
```
  
[name]은 entry에서 지정한 키값이 할당된다. 기본적으로 string을 할당해 단일 entry를 사용하면 main이 디폴트로 지정되는듯 하다.  
[hash][chunkhash] 황용해 이렇게 위와 같이 지정했을 경우 동일한 소스파일 대상으로는 동일한 해시값이 떨어진다.  
 그리고 해시의 특징상 극히 일부의 소스가 바뀌어도 해시값은 완전히 바뀐다.  
  
? [chunkhash]는 정확히 뭐지  

### enrty를 오브젝트로 설정했을 때의 의미

``` javascript
    entry: {
        index: './index.js',
        helloworld: './module.js'
    },
```

### HtmlWebpackPlugin
  
웹팩으로 번들링된 청크파일을 사용하는 html파일을 생성하는 과정을 단순화시키는 플러그인
이를테면 해시가 붙어 바뀌는 이름을 자동으로 html의 script태그에 적용한다던가하는 편리한 기능들이 포함된다.  

``` javascript
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
```

### 한글 문서  
https://webpack.kr/concepts  
