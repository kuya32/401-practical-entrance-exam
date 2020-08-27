'use strict';

const cheerio = require('cheerio');

/*
--------------------------------------------------------------------------
Write a function named changeAllClassNames that uses jQuery to:
 - select all each li and add a class of "fruit";

Remember, in this test, $ is jQuery, just as it is in a normal web app
--------------------------------------------------------------------------
*/

let $ = createSnippetWithJQuery(`
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li>Pear</li>
</ul>
`);

const changeAllClassNames = () => {
  // Solution code here ...
}

///////////////////////////////////////////////////
// TESTS
///////////////////////////////////////////////////

describe('Testing challenge', () => {
  it('It should add a class of fruit to all the list items', () => {
    changeAllClassNames();
    expect($('li.apple').hasClass('fruit')).toBe(true);
    expect($('li.orange').hasClass('fruit')).toBe(true);
  })
});

function createSnippetWithJQuery(html) {
  return cheerio.load(html);
};

