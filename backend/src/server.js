import express from 'express';

import config from './config/config.js';


const app = express();
const PORT = config.port;

app.get('/', async (req, res) => {
    return res.status(200).json({
        "message": "Server is up and running..."
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
})
