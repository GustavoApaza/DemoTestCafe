import {Selector} from 'testcafe';

const iframeName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body ');

fixture('Iframe')
    .page('https://the-internet.herokuapp.com/iframe');

test('Test Iframe', async t => {
    await t
        //.timeouts(5000) //setPageLoadTimeout
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, 'Hello TestCafe')
        .expect(textArea.innerText).contains('Hello')
        //.click('tox-tbtn__select-label')
        .switchToMainWindow() //Es necesario para salir del iframe y asi interactuar con otro elemento fuera del iframe
        .wait(5000);
})