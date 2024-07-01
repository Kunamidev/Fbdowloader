const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/fbdl', async (req, res) => {
    try {
        const vid_url = req.query.vid_url || '';
        const response = await axios.get(`https://samirxpikachu.onrender.com/fbdl?vid_url=${encodeURIComponent(vid_url)}`);
        
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from the external API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
