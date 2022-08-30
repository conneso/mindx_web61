import { Router } from 'express';

export const users = [
  { id: 1, username: 'admin', password: 'admin123', isAdmin: true },
  // { id: 1, username: 'viewer1', password: '123123', isVerified: true },
];

const userRouter = Router();

export default userRouter;