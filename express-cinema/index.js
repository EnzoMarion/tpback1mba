const express = require('express');
const { PrismaClient } = require('../express-cinema/generated/prisma');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'OK express-cinema' });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});