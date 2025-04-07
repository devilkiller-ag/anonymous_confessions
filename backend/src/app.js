import cors from 'cors';
import express from 'express';


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

export default app;
