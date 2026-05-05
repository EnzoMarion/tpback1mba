import express from 'express';

const app = express();
const port = Number(process.env.PORT) || 1995;

app.use(express.json());

app.get('/', (_req, res) => {
    res.json({
        message: 'API Express + TypeScript OK',
    });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});