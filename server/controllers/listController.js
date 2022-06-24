import knex from '../db/index.js';

const fullList = (req, res) => {
  knex('movie')
  .select('title')
  .orderBy('id', 'asc')
  .then(data => res.status(200).json(data))
};

const searchResults = (req, res) => {
  let searchReq = req.params.results;
  knex('movie')
    .select('title')
    .where('title', 'like', `%${searchReq}%` )
    .then(data => res.status(200).json(data))
};

const removeMovie = (req, res) => {

  console.log(req.body.title);

  let selectedMovie = req.body.title;

  knex('movie')
    .select('*')
    .where({title: selectedMovie})
    .del()
    .then(data => res.status(200).json(`the movie that you have selected was removed.`))
}

const addMovie = (req, res) => {
  console.log(req.body.title)
  let selectedMovie = req.body.title;

  knex('movie')
    .insert({title: selectedMovie })
    .then(data => {res.status(201).json(`${selectedMovie} has been added.`)})
}

const changeWatched = (req, res) => {
  console.log(req.body.title)

  let selectedMovie = req.body.title;

  knex('movie')
    .select('*')
    .where({title: selectedMovie})
    .update({watched: true})
    .then(data => res.status(200).json(data))
}

export {fullList, searchResults, removeMovie, addMovie, changeWatched};