import {Selector} from 'testcafe';

const developerName = Selector('#developer-name');
const osOption = Selector('#macos');
const buttonSubmit = Selector('#submit-button');

fixture('============================ Using selectors ============================')
    .page('http://devexpress.github.io/testcafe/example');

test('Enter dates and send', async t => {
        await t //TestController
            .setTestSpeed(0.1)
            .typeText(developerName, 'Gus')
            .click(osOption)
            .click(buttonSubmit)
        console.log('Paso el bloque test');
})