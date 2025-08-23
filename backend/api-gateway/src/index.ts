




import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 3000;

// API Gateway configuration
const apiPrefix = '/api';

// Proxy to auth service
app.use(
  `${apiPrefix}/auth`,
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: {
      [`${apiPrefix}/auth`]: '',
    },
  })
);

// Proxy to user service
app.use(
  `${apiPrefix}/users`,
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: {
      [`${apiPrefix}/users`]: '',
    },
  })
);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API Gateway is running' });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});






