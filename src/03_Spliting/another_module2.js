import lodash from 'lodash';

function makeHTML() {
    lodash(['가', '나', '다']).forEach((number) => {
        const div = document.createElement("div");
        div.innerHTML = number.toString();
        document.body.appendChild(div)
    });
}

makeHTML();