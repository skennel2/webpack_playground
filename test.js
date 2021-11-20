import { getHello } from './module.js'

function makeDocument() {
    const div = document.createElement('div');
    div.append(getHello('World'))
    document.body.append(div);
}

makeDocument();