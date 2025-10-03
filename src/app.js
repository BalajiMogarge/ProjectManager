import express from 'express';
import cors from 'cors';

const app = express();

//Basic configuration
app.use(express.json({ extended: true, limit: '16kb' }));
app.use(express.urlencoded({ limit: '16kb' }));
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World');
});

//cors Configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(',') || 'http://localhost:5173',
    cridentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

export default app;
