import testLog from './module';

function makeHTML() {
    import('lodash').then(({default: lodash}) => {
        lodash(['가', '나', '다']).forEach((number) => {
            const div = document.createElement("div");
            div.innerHTML = number.toString();
            document.body.appendChild(div)
        });
    });
    testLog();
}

makeHTML();