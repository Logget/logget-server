import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
// Routes middleware
app.use('/api/user', authRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
