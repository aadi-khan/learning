


import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes will be added here

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Auth service is running' });
});

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});


