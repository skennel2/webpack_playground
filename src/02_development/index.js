import funcHasError from "./test";

function makeHTML() {
    const div = document.createElement('div');
    
    div.innerHTML = "Hello World";

    return div;
}

document.body.appendChild(makeHTML());
funcHasError();