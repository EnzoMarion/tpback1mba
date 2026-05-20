import 'dotenv/config';
import express from 'express';
import { prisma } from './prisma';
import moviesRouter from "./routes/movies";
import actorsRouter from "./routes/actors";
import {authRouter} from "./routes/auth";
import {checkToken} from "./middlewares/checkToken";

const app = express();
const port = Number(process.env.PORT) || 1995;

app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: 'API Express + TypeScript OK' });
});

const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/api/movies', moviesRouter);
apiRouter.use('/api/actors', checkToken, actorsRouter);

app.use('/', apiRouter);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});