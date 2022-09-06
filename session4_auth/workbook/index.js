import express from 'express';
import authRouter from './auth';
import filmRouter from './film';

const port = 3001;

const app = express();

app.use(express.json());

app.use('/films', filmRouter);
app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
