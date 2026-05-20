import 'dotenv/config';
import express from 'express';
import { prisma } from './prisma';
import moviesRouter from "./routes/movies";
import actorsRouter from "./routes/actors";

const app = express();
const port = Number(process.env.PORT) || 1995;

app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: 'API Express + TypeScript OK' });
});

// Movies
app.use('/', moviesRouter);
// Actors
app.use('/', actorsRouter);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});