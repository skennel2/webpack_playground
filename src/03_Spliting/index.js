import lodash from 'lodash';

function makeHTML() {
    lodash(['A', 'B', 'C']).forEach((number) => {
        const div = document.createElement("div");
        div.innerHTML = number.toString();
        document.body.appendChild(div)
    });
}

makeHTML();