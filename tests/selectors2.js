import { Selector } from 'testcafe';
fixture `selectorTest`
    .page `https://demoqa.com/elements`

// test
//     ('Verify subtitle of webpage', async t => {
//         const selectorItem = Selector('#item-3');
//         await t //TestController
//         .click(selectorItem)
//         .wait(3000)

//         const selectorHeader = Selector('.main-header')
//         const headerString = await selectorHeader.innerText

//         console.log('Header String: ' + headerString);
//     });
//========================================================================
const selectorItem2 = Selector(id => {
    return document.getElementById(id);
});
test
    ('Verify subtitle of webpage', async t => {
        await t
        .click(selectorItem2('item-3'))
        .wait(3000)

        const selectorHeader = Selector('.main-header')
        const headerString = await selectorHeader.innerText

        console.log('Header String: ' + headerString);
    });