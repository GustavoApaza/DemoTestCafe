fixture ('============================ First test ============================')
    .page ('https://demoqa.com/');

test('Open the toolsQA webpage', async t => {
        await t
            .wait(8000);
        console.log('Enter the toolsQA webpage');
})