const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors());  
app.use(express.json());

// Serve static files (like index.html) from the "public" folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Send React for every other route
app.use('/',(req, res) => {
    res.send("server running");
    //res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
