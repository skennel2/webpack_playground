// import lodash from 'lodash';
import testLog from './module';

function makeHTML() {
    import('lodash').then(({default: lodash}) => {
        lodash([1, 2, 3]).forEach((number) => {
            const div = document.createElement("div");
            div.innerHTML = number.toString();
            document.body.appendChild(div)
        });
    })
    testLog();
}

makeHTML();