import lodash from 'lodash';
import testLog from './module';

function makeHTML() {
    lodash(['A', 'B', 'C']).forEach((number) => {
        const div = document.createElement("div");
        div.innerHTML = number.toString();
        document.body.appendChild(div)
    });
    testLog();
}

makeHTML();