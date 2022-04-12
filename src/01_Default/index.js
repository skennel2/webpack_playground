import { getHello } from './module.js'
// import구문이 없이 css파일만 존재한다면 웹팩은 해당 css파일을 해석하지 않는다.
import './style.css'

function makeDocument() {
    const div = document.createElement('div');
    div.classList.add('hello');
    div.append(getHello('World!!!'))
    document.body.append(div);
}

makeDocument();