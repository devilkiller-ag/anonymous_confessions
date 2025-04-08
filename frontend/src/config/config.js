const config = {
  backend_url: import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080',
  socket_url: import.meta.env.VITE_SOCKET_URL || 'http://localhost:8080',
  env: import.meta.env.MODE || 'development',
  confession_expiry: 60000, // 1 minute
};

export default config;
