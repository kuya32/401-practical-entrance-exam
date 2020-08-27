'use strict';

const cheerio = require('cheerio');

/*
--------------------------------------------------------------------------

Without altering the html, first write a function named makeUniqueList.
  - This function should return an array of only the unique cats from the cats array.

Next, write a function named generateDropDown.
  - This function needs to:
    - Call the makeUniqueList function to get the list of cats to render
    - use jQuery to create:
      - a select form element with options for each UNIQUE cat from the array of cats
      - append it to the DOM.

Remember, in this test, $ is jQuery, just as it is in a normal web app
--------------------------------------------------------------------------
*/

let $ = createSnippetWithJQuery(`
<section>
  <form>
    <legend>Which is the best cat?</legend>
  </form>
</section>
`);

const cats = ['grumpy cat', 'hello kitty', 'garfield', 'cheshire cat', 'lil bub', 'garfield', 'hello kitty', 'grumpy cat', 'garfield', 'cheshire cat', 'grumpy cat', 'hello kitty', 'lil bub', 'lil bub', 'tigger', 'cheshire cat'];

const generateDropDown = () => {
  // Solution code here ...
}

const makeUniqueList = () => {
  // Solution code here ...
}

///////////////////////////////////////////////////
// TESTS
///////////////////////////////////////////////////

describe('Testing challenge', () => {

  it('It should return a unique array of cats', () => {
    expect(makeUniqueList().length).toStrictEqual(6);
  })

  it('It should generate a drop down list of cats and append it to the DOM', () => {
    generateDropDown();
    expect($('option').eq(0).text()).toStrictEqual('grumpy cat');
    expect($('option').eq(1).text()).toStrictEqual('hello kitty');
    expect($('option').eq(2).text()).toStrictEqual('garfield');
    expect($('option').eq(3).text()).toStrictEqual('cheshire cat');
    expect($('option').eq(4).text()).toStrictEqual('lil bub');
  })
});

function createSnippetWithJQuery(html) {
  return cheerio.load(html);
};
