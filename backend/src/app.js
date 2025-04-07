import cors from 'cors';
import express from 'express';

import { errorHandler } from './middleware/error-handler.js';
import confessionRoutes from './routes/confession.routes.js';


const app = express();

// MIDDLEWARE: To enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// MIDDLEWARE: To parse incoming requests with JSON payloads
app.use(express.json());

// MIDDLEWARE: To attach the socket.io instance to every request object
app.use((req, res, next) => {
  req.io = app.get('io');
  next();
});

// ROUTES
app.use('/api/confessions', confessionRoutes);

// MIDDLEWARE: To handle errors globally (should be the last one in the stack).
app.use(errorHandler);

export default app;
