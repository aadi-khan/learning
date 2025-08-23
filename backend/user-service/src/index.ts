



import express from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());

// Routes will be added here

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'User service is running' });
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});





