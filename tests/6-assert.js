import { Selector } from 'testcafe';

fixture('Example assertion')
   .page('http://devexpress.github.io/testcafe/example/');

test('Check match text contain', async t => {
   const developerNameInput = Selector('#developer-name');

   await t
      .setTestSpeed(0.1)
      .expect(developerNameInput.value).eql('', 'mensaje vacio')
      .typeText(developerNameInput, 'Peter Parker')
      .expect(developerNameInput.value).contains('Peter', 'validar este match');
});
//================================================================================================
// const cantidadDeElements = Selector(value => {
//    return document.getElementsByClassName(value).length();
// });

// fixture.only('Test GOT webpage')
//    .page('https://dsternlicht.github.io/RESTool/#/characters?search=');

// test('Number of elements', async t => {
//    //const cant = Selector('.infinite-scroll-component cards-wrapper .card').length();
//    //var cantidadDeCards = document.getElementsByClassName("card").length;
//    var cantidadDeCards = cantidadDeElements("card");
//    console.log(cantidadDeCards);
// })
// //================================================================================================
// // fixture('Test ToolsQA webpage')
// //    .page('https://demoqa.com/');

// // test('Number of elements', async t => {
// //    await t
// // })