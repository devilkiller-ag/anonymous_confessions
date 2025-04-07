import http from 'http';

import app from './app.js';
import connectDB from './utils/db.js';
import config from './config/config.js';
import { initSocket } from './socket/index.js';

const PORT = config.port;

const server = http.createServer(app);
const io = initSocket(server);
app.set('io', io);

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
