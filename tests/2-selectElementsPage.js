fixture('============================ Using elements page ============================')
    .page('http://devexpress.github.io/testcafe/example');

test('Enter dates and send', async t => {
    await t 
        .setTestSpeed(0.1)
        .typeText('#developer-name', 'Gus')
        .click('#macos')
        .click('#submit-button');
    console.log('Paso el bloque test');
})