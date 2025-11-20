import express from 'express';
import "dotenv/config";

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Bun with Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});