'use strict';

const request = require('supertest');

/*
-------------------------------------------------------------------

CHALLENGE 1 - Review

First, write a function called mapCurrentEvents that maps over the current events object, runs it through a constructor function and returns an array

The constructor function should be a stand alone function named Event and should have the following keys:
* author
* categories
* summary
* img_url
* date
* title

Then, write an `/events` route with a callback function called getCurrentEvents.

The getCurrentEvents callback function should call the mapCurrentEvents function and send the resulting array to the front-end.

NOTE: You do not need write the app.listen() code for your server
      The test do this for you
-------------------------------------------------------------------
*/

const currentEvents = {
  news: [
    {
      author: "go",
      category: ["world"],
      description: "Israel is bracing for more political turmoil ...",
      id: "1eff5f00-ce1e-4de0-922f-1b70299e9fe2",
      image: "http://placehold.it/200x200?text=israel",
      language: "en",
      published: "2020-04-13 18:00:33 +0000",
      title: "Israel's coalition talks falter ahead of midnight deadline",
      url: "https://abcnews.go.com"
    },
    {
      author: "@allahpundit",
      category: ["politics"],
      description: "Federalism....",
      id: "2bede54d-9df8-4eda-8ea4-5fe166c6b13c",
      image: "http://placehold.it/200x200?text=federalism",
      language: "en",
      published: "2020-04-13 18:00:14 +0000",
      title: "States vs Nation ... you decide",
      url: "https://hotair.com"
    },
    {
      author: "Daniel Iglesias",
      category: ["technology", "gadgets"],
      description: "We're back this week with more applications and games...",
      id: "8572f23a-06e4-4e55-afa0-33f0b43d00d3",
      image: "http://placehold.it/200x200?text=gadgets",
      language: "en",
      published: "2020-04-13 18:00:13 +0000",
      title: "The best new apps and games launched for Easter | AndroidPIT",
      url: "https://www.androidpit.com"
    },
  ]
}

function mapCurrentEvents() {
  // Solution code here...
}

function Event(obj) {
  // Solution code here...
}

// Express sever here
const createServer = () => {

  const express = require('express');
  const app = express();

  // Routes go here

  return app;

}


///////////////////////////////////////////////////
// TESTS
///////////////////////////////////////////////////

describe('Testing challenge', () => {

  const server = createServer();

  it('It should return an array of object instances with a key of author', () => {
    expect(mapCurrentEvents()[0].author).toStrictEqual("go");
  });

  it('It should return an array of object instances with a key of categories', () => {
    expect(mapCurrentEvents()[0].categories).toStrictEqual(["world"]);
  });

  it('responds to /events', function testEvents() {
    return request(server)
      .get('/events')
      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.body.length).toEqual(3);
        expect(response.body[2].categories).toStrictEqual(["technology", "gadgets"]);
      })
  });

  it('404 everything else', function testPath() {
    return request(server)
      .get('/foo/bar')
      .then(response => {
        expect(response.status).toEqual(404);
      })
  });

});
