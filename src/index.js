import dotenv, { configDotenv } from 'dotenv';
import app from './app.js';
import connectDB from './db/connectDB.js';
dotenv.config({
  path: './.env',
});
const PORT = process.env.PORT || 3000;

connectDB()
  .then(
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    })
  )
  .catch((error) => {
    console.error('MongoDB Connection failed', error);
    process.exit(1);
  });
