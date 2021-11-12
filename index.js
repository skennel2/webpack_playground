import HelloWorld from './module.js'

function makeDocument() {
    const div = document.createElement('div');
    div.append(HelloWorld.value)
    document.body.append(div);
}

makeDocument();