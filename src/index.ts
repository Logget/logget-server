import express from 'express';
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('<h1>Express + TypeScript Server</h1>'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
