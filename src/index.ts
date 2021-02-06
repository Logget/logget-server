import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.PORT || 8000;

// Cors middleware
app.use(cors());
// Routes middleware
app.use('/api/user', authRoutes);

mongoose.connect(process.env.DB_CONNECT || '127.0.0.1:27017', { useNewUrlParser: true }, () => {
  console.log('✅ Connected to DB');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
