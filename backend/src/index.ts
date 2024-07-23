import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes/router';
import { connectToDb, PORT } from './db';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.use(express.json());
app.use(cors());
app.use('/', routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
  });
