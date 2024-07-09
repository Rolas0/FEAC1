import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/router';
import { connectToDb, PORT } from './db';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes);

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
  });
