const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;


app.get('/', async (req, res) => {
    return res.status(200).json({
        "message": "Server is up and running..."
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
})
