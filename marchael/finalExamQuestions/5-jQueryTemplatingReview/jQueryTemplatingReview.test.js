'use strict';

const cheerio = require('cheerio');

/*
--------------------------------------------------------------------------
Write a function named templatingWithJQuery that uses jQuery to:
 - Get the html template from the DOM
 - Copy the contents
 - Fill it with the Star Wars People
 - Append it to the DOM.

Remember, in this test, $ is jQuery, just as it is in a normal web app
--------------------------------------------------------------------------
*/

let starWarsPeople = [
  {
    "name": "Luke Skywalker",
    "height": "172",
    "eye_color": "blue"
  },
  {
    "name": "C-3PO",
    "height": "167",
    "eye_color": "yellow"
  },
  {
    "name": "R2-D2",
    "height": "96",
    "eye_color": "red"
  }
];

let $ = createSnippetWithJQuery(`
<main>
  <section id="template">
    <h2></h2>
    <h3></h3>
    <p></p>
  </section>
</main>
`);

const templateWithJQuery = () => {
  // Solution code here...
}

///////////////////////////////////////////////////
// TESTS
//////////////////////////////////////////////////

describe('Testing challenge', () => {
  test('It should append the star wars people to the DOM', () => {
    templateWithJQuery();
    expect($('section:nth-child(2) h2').text()).toStrictEqual('Luke Skywalker');
    expect($('section:nth-child(3) h3').text()).toStrictEqual('167');
    expect($('section:nth-child(4) p').text()).toStrictEqual('red');
  })
});

function createSnippetWithJQuery(html) {
  return cheerio.load(html);
};
