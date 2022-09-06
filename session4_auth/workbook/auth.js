import { Router } from 'express';
import HttpStatusCode from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { users } from './user';

const authRouter = Router();

export const jwtKey = 'thisisakey';

authRouter.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);
  if (!user) {
    res.status(HttpStatusCode.NOT_FOUND).send('User not found!');
  }

  if (user.password !== password) {
    res.status(HttpStatusCode.UNAUTHORIZED).send('Password incorrect!');
  }

  const token = jwt.sign({ username }, jwtKey);

  res.json({ token });
});

authRouter.post('/register', (req, res) => {
  const { username, password } = req.body;
  const id = users.length + 1;

  const isExist = users.find(user => user.username === username);
  if (isExist) {
    res.status(HttpStatusCode.BAD_REQUEST).send('Username existed!');
  }

  users.push({ id, username, password });
  res.status(HttpStatusCode.CREATED).json({ username, password });
});

export default authRouter;