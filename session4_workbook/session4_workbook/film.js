import { Router } from 'express';
import HttpStatusCode from 'http-status-codes';
import { getUser, isAdmin, isAuthenticated } from './authMdw';

const filmRouter = Router();

let films = [
  { "id": 1, "name": "Titanic", "isFree": true },
  { "id": 2, "name": "Avenger", "isFree": false },
  { "id": 3, "name": "Iron Man", "isFree": false },
  { "id": 4, "name": "Batman", "isFree": false },
  { "id": 5, "name": "Iron Man 2", "isFree": false },
  { "id": 6, "name": "Iron Man 3", "isFree": false },
  { "id": 7, "name": "Tenet", "isFree": false },
  { "id": 8, "name": "Inception", "isFree": true }
];

filmRouter.get('/', getUser, (req, res) => {
  if (req.user) {
    res.json(films);
  }

  const freeFilms = films.filter(film => film.isFree);
  res.json(freeFilms);
});

filmRouter.post('/', isAuthenticated, isAdmin, (req, res) => {
  const { name, isFree } = req.body;

  const id = films.length + 1;

  films.push({ id, name, isFree });

  res.status(HttpStatusCode.CREATED).json(films);
});

filmRouter.put('/:id', isAuthenticated, isAdmin, (req, res) => {
  const { name, isFree } = req.body;
  const { id } = req.params;

  const film = films.find(film => film.id === id);
  film.name = name;
  film.isFree = isFree;

  res.json(films);
});

filmRouter.delete('/:id', isAuthenticated, isAdmin, (req, res) => {
  const { id } = req.params;

  films = films.filter(film => film.id !== id);

  res.json(films);
})

export default filmRouter;