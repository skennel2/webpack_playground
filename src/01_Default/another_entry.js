import { getHello } from './module.js'

function makeDocument() {
    const div = document.createElement('div');
    div.classList.add('hello');
    div.append(getHello('Webpack'))
    document.body.append(div);
}

makeDocument();