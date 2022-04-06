import {Selector} from 'testcafe';

const interfaceSelect = Selector('select#preferred-interface');
const interfaceOptions = interfaceSelect.find('option');

fixture('Select option of a dropdown')
    .page('https://devexpress.github.io/testcafe/example/');

test('Test Iframe', async t => {
    await t
        .click(interfaceSelect)
        .click(interfaceOptions.withText('JavaScript API'))
        .wait(5000);
})