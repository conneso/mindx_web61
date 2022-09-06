import jwt from 'jsonwebtoken';
import HttpStatusCode from'http-status-codes';
import { jwtKey } from './auth';
import { users } from './user';

const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const data = jwt.verify(authorization, jwtKey);

    const user = users.find(user => user.username === data.username);
    if (!user) {
      throw new Error('User not found!');
    }

    req.user = user;
  } catch (error) {
    res.status(HttpStatusCode.UNAUTHORIZED).send(error.message);
  }

  next();
};

const isAdmin = (req, res, next) => {
  const { user } = req;

  if (!user.isAdmin) {
    res.status(HttpStatusCode.FORBIDDEN).send('You are not allowed!');
  }

  next();
};

const getUser = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const data = jwt.verify(authorization, jwtKey);

    const user = users.find(user => user.username === data.username);
    // if isVerified -> req.user = user;
    req.user = user;
    next();
  } catch (error) {
    next();
  }
}

export { isAuthenticated, isAdmin, getUser };