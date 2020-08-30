'use strict';

require('dotenv').config();
const pg = require('pg');
const express = require('express');
const superagent = require('superagent');

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', console.error);

app.get('/favorites', getAllPokemon);
app.get('/', showHome);
app.post('/list', sendPokiData);
app.post('/pokemon', saveFavoritePokemon);

function getAllPokemon (req, res) {
  client.query('SELECT * FROM pokemon')
    .then(result => {
      res.render('pages/favorites', {pokemon: result.rows});
    })
    .catch(error => handleError(error, res));
}

function showHome (req, res) {
  res.render('pages/index');
}

function sendPokiData (req, res) {
  let urlPokiSearch = 'https://pokeapi.co/api/v2/pokemon';

  superagent.get(urlPokiSearch)
    .then(data => {
      const pokeData = data.body.results.map(data2 => new Pokemon(data2));
      let pokeDataSort = pokeData.sort ((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      });
      res.render('pages/show', {
        pokemonArray : pokeDataSort
      });
    })
    .catch(error => handleError(error,res));
}

function saveFavoritePokemon (req, res) {
  const {name} = req.body;

  const sql =`INSERT INTO pokemon (name) VALUES($1)`;
  const valueArray =[name];

  client.query(sql, valueArray)
    .then(() => {
      res.redirect('/');
    })
    .catch(error => handleError(error, res));
}

function handleError(error, res) {
  console.error(error);
  res.render('pages/error', {error});
}

function Pokemon (pokeData) {
  this.name = pokeData.name;
}

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`We are up on PORT: ${PORT}! Let's get it!`));
  });
