
# webpack.config.js vs code에서 자동완성 사용하기  
https://joshuatz.com/posts/2020/vscode-intellisense-autocomplete-for-webpack-config-files/  

```javascript
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
  
---
  
# Development
```javascript
// webpack.config.json
{
    mode: 'development'
}
```

## Source Map 
번들된 파일의 소스코드와 원본 소스코드를 매핑하는 기술  
에러가 발생했을때 실제 에러가 발생한것은 번들된 파일이지만 실제 에러가 존재하는 소스파일을 찾아갈수 있게 해준다. 

## inline source map
```javascript
// webpack.config.json
{
    mode: 'development',
    devtool: 'inline-source-map'
}
```
이 옵션을 사용하고 소스파일에 일부로 에러를 심은 후 빌드하고 dist/index.html을 브라우저에서 열어보면 해당하는 에러를 로깅하는데 원본소스파일을 트레이스 해준다.
즉 실제 사용되는 파일은 번들 파일이지만 개발 편의를 위해 원본소스의 에러 위치를 알수 있게 해준다는 것이다.
  
---

# Loader 
Assets들을 어떻게 해석할것인지를 지정한다.  
아래와 같이 구성하면 test 구문에 따라 css는 style-loader, css-loader가 각각 처리한다.  
css-loader 는 모든 css와 그 css 내부의 import한 다른 css 파일을 json 파일로 로드하고 style-loader에 넘겨준다  
style-loader 는 json을 가져와서 style 태그를 추가하고 index.html 파일 안에 tag를 삽입한다.  
https://heecheolman.tistory.com/33  
  
어떤 css파일이 존재하는데 import구문이 없이 css파일만 존재한다면 웹팩은 해당 css파일을 해석하지 않는다.
하나의 test에 대해 여러개의 로더를 지정하면 오른쪽의 로더부터 사용이 된다.  
  
```bash
npm install --save-dev css-loader
npm install --save-dev style-loader
```
```javascript
// webpack.config.json
{
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}
```
  
---
  
# Code Spliting
코드 스플리팅을 이용하면 코드를 다양한 번들로 분리하고 요청에 따라 로드하거나 병렬로 로드하는것이 가능해진다.  


## entry point 분할
```
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
```
엔트리를 여러개 두어 번들 파일을 분리하는것이 가능하다.  
하지만 이 경우 단점이 존재한다 .

1. 각 번들 사이에 중복된 모듈이 존재한다면 해당 모듈은 각각의 번들 모두에 포함된다.
1. 유연하지 않으며 핵심 애플리케이션 로직으로 코드를 동적으로 분할하는 데 사용할 수 없다.

## Prevent Duplication
dependOn 옵션을 사용하여 청크간 공유모듈에 대한 중복을 방지할수 있다.
단일 HTML 페이지에서 여러 엔트리 포인트를 사용하는 경우 optimization.runtimeChunk: 'single'를 사용해야하는데 그렇지 않으면 어떤 문제가 발생한다고한다.
```
{
   entry: {
        index: './src/index.js',
        another: './src/another-module.js',
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        another: {
            import: './src/another-module.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
    },
    optimization: {
       runtimeChunk: 'single',
    },
}
```

---
  
# Caching
https://webpack.kr/guides/caching/

빌드되어 번들링되는 파일의 이름을 지정할때 아래와 같이 옵션을 줄수있다.

```
output.filename: 'bundle_[name]_[hash].js' 
```
  
[name]은 entry에서 지정한 키값이 할당된다. 기본적으로 string을 할당해 단일 entry를 사용하면 main이 디폴트로 지정되는듯 하다.  
[hash][chunkhash] 황용해 이렇게 위와 같이 지정했을 경우 동일한 소스파일 대상으로는 동일한 해시값이 떨어진다.  
 그리고 해시의 특징상 극히 일부의 소스가 바뀌어도 해시값은 완전히 바뀐다.  
  
> ? [chunkhash]는 정확히 뭐지  
> ? 그 전에 번들파일에 해시를 붙이는게 왜 필요한거지..
  
## 정적파일에 해시가 필요한 이유
https://medium.com/@sahilkkrazy/hash-vs-chunkhash-vs-contenthash-e94d38a32208  

기본적으로 브라우저는 정적 자원을 캐싱해서 제공하기 때문에 내용이 업데이트 되어도 사용자에게는 변경사항이 적용되지 않을 수가 있다.
  
## 세가지 해시옵션 Hash vs chunkhash vs ContentHash
Hash방식은 빌드될때 마다 하나라도 새로운 변경접이 있으면 모든 엔트리포인트 번들파일의 해시를 새로 딴다.  
chunkhash방식은 변경사항이 존재하는 엔트리포인트의 번들파일만 해시가 새로 따진다.  
contenthash 방식은 빌드된 파일의 콘텐츠로 계산되는 해시값을 가진다. 

case1  
1. chunkhash방식 해시
    - `output.filename: 'bundle_[name]_[chunkhash].js`
1. entry point로 a, b, c 존재
1. a와 b는 c모듈에서 export하는 함수를 호출해서 사용한다.
1. 빌드 
1. a,b 번들파일 생성됨, c의 내용자체가 a,b에 포함되고 c는 비어있는 형태로 빌드된다.
1. c 모듈에 변경사항 발생 
1. 빌드
1. a, b, c의 번들파일 해시가 모두 변경된다. 기대한 결과는 c번들만 변경되는것.
  
이유는 c 모듈의 내용이 a,b 모듈에 중복되어서 포함되기 때문이다.  
이 중복을 제거하려면 코드스플리팅을 이용해야하며
아래의 **dependOn**을 활용하는것도 방법이다.
  
```javascript
    a: {
        import: './a.js',
        dependOn: 'c'
    }
```
  
## hash silce
https://sk92.tistory.com/4

[hash:8] 처럼 원하는 length만큼 slice 가능
> 1c661c758604b2fee15d -> 1c661c75
  
## enrty를 오브젝트로 설정했을 때의 의미
``` javascript
    entry: {
        index: './index.js',
        helloworld: './module.js'
    },
```
  
---
  
# Plugin
https://webpack.kr/plugins  

기본적으로 제공되는 플러그인이 있는듯하다.
  
## HtmlWebpackPlugin
웹팩으로 번들링된 청크파일을 사용하는 html파일을 생성하는 과정을 단순화시키는 플러그인
이를테면 해시가 붙어 바뀌는 이름을 자동으로 html의 script태그에 적용한다던가하는 편리한 기능들이 포함된다.  

``` javascript
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
```
  
---  
  
# DevServer
```bash
npm install --save-dev webpack-dev-server
```

webpack-dev-server 패키지로 활성화  

## hot 옵션과 liveReload 옵션의 차이는 뭘까?
https://newbedev.com/what-is-the-difference-between-hot-reloading-and-live-reloading-in-react-native  
  
live reload는 파일이 변경되었을때 모든 앱을 다시 리프레쉬하여 모든 state가 초기화된다.  
hot reload는 오직 부분만 변경되며 기존 state는 유지된다.

## webpack.config의 watch 옵션
watch 옵션의 디폴트는 false 이지만 webpack-dev-server를 사용할 경우 자동으로 true로 세팅된다.  
webpack의 serve명령어를 사용하면 watch: true로 설정하여도 에러를 뱉는데 의미없는 옵션으로 보는듯하다.
  
---
  
# 한글 문서  
https://webpack.kr/concepts  
