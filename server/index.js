const express = require('express');
//const axios = require('axios');
//const path = require('path');
//const cors = require('cors');


const app = express();
const PORT = 3000;

//app.use(cors());  
//app.use(express.json());

// Serve static files (like index.html) from the "public" folder
//app.use(express.static(path.join(__dirname, '../client/dist')));

// API Route remains accessible
//app.get('/api/joke', async (req, res) => {
  //  try {
    //    const response = await axios.get('https://appspot.com');
      //  res.json({ success: true, data: response.data });
    //} catch (error) {
      //  res.status(500).json({ success: false, error: error.message });
    //}
//});

// Send React for every other route
app.use('/',(req, res) => {
    res.send('Hello from the server!');
  //  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


