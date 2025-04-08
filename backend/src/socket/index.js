import { Server } from 'socket.io';
import config from '../config/config';


export const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: config.frontend_url,
    },
  });

  io.on('connection', (socket) => {
    console.log('User connected: ', socket.id);

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  io.on('error', (error) => {
    console.error('Socket error: ', error);
  });

  return io;
}
