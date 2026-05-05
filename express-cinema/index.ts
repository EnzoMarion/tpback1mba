import 'dotenv/config';
import express from 'express';
import { prisma } from './prisma';

const app = express();
const port = Number(process.env.PORT) || 1995;

app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: 'API Express + TypeScript OK' });
});

// Movies
app.get('/api/movies', async (_req, res) => {
    try {
        const movies = await prisma.movie.findMany();
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur' });
    }
});

app.get('/api/movies/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const movie = await prisma.movie.findUnique({ where: { id } });

        if (!movie) {
            return res.status(404).json({ error: 'Film non trouvé' });
        }

        res.json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});