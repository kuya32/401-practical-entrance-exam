'use strict';

const puppeteer = require('puppeteer');

const SERVER = 'http://localhost:3002';

describe('Building an Express Server with a Postgres Database', () => {
  it('should load all pokemon', async function (done) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto(SERVER, { waitUntil: 'domcontentloaded' });
    const numForms = await page.$$eval('form', forms => forms.length);
    await browser.close();
    expect(numForms).toEqual(20);
    done();
  })

  it('should alaphabetize the pokemon that it gets back from the API', async function (done) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto(SERVER, { waitUntil: 'domcontentloaded' });
    const thirdCharacter = await page.$$eval('h2', characters => characters[3].textContent.trim());
    await browser.close();
    expect(thirdCharacter).toBe('butterfree');
    done();
  });

  it('should redirect back to the results page after you add a pokemon', async function (done) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto(SERVER, { waitUntil: 'domcontentloaded' });
    const hrefElement = await page.$('button');
    await hrefElement.click();
    const newPage = await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    const url = await page.url();
    await browser.close();
    expect(url).toEqual(`${SERVER}/`);
    done();
  });

  it('should add a pokemon to the favorites page', async function (done) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto(SERVER, { waitUntil: 'domcontentloaded' });
    const hrefElement = await page.$('button');
    await hrefElement.click();
    const newPage = await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

    await page.goto(`${SERVER}/favorites`, { waitUntil: 'domcontentloaded' });
    const characterCount = await page.$$eval('li', characters => characters.length);
    const character = await page.$$eval('li', characters => characters[0].textContent);
    await browser.close();
    expect(characterCount).toBeGreaterThan(0);
    expect(character).toBeDefined();
    done();
  })
})
