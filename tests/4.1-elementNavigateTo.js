fixture('Demostration of navigateTo')
    .page('https://www.google.com');

test('Navigate to RESToolApp', async t => {
    await t
    .navigateTo('https://dsternlicht.github.io/RESTool/#/characters?search=')
    .wait(5000);
    console.log('Open the GOT webpage');
})