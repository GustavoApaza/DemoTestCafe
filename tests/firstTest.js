fixture `FirstTest` //usar acento grave

test
    .page `http://devexpress.github.io/testcafe/blog/`
    ('Test open the test cafe webpage', async t => {
        console.log('Se ingreso a la pagina de test cafe');
    });
test
    .page `http://devexpress.github.io/testcafe/example`
    ('Test open the example webpage', async t => {
        console.log('Se ingreso a la pagina de ejemplo de test cafe');
    });
test
    .page `https://demoqa.com/`
    ('Test open demoQA webpage', async t => {
        console.log('Se ingreso a la pagina demoQA tools');
    });