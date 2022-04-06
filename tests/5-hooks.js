fixture('============================ Using elements page ============================')
    .page('http://devexpress.github.io/testcafe/example')
    .beforeEach(async t => {
        await t
            //.maximizeWindow()
            .setTestSpeed(0.1);
    });

test('Enter dates and send', async t => {
    await t 
        .typeText('#developer-name', 'Gus')
        .click('#windows')
        .click('#submit-button');
}).timeouts({
    pageLoadTimeout: 2000
});

test.page('https://the-internet.herokuapp.com/upload')
('Test upload file', async t => {
    await t
        .setFilesToUpload('#file-upload','../../img/cat.jpg')
        .click('#file-submit');
})

test('Test drag element', async t => {
    await t 
        .typeText('#developer-name', 'Gustavo')
        .click('#tried-test-cafe')
        .drag('#slider',630,0,{offsetX:0, offsetY:0}) //(nombreDelSelector, distancia final en eje X, distancia final eje Y, coordenada de colocacion del puntero desde el selector)
        .click('#submit-button')
        .wait(3000);
})

