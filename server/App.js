import express from 'express';
import cors from 'cors';
import knex from './db/index.js';
import listRoute from './routes/listRoute.js'
const app = express()
const port = 8080;

app.use(cors())
app.use(express.json());
app.use('/api/', listRoute);


app.listen(port, () => {console.log(`Server is listening on port ${port}`)})