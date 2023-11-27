const express = require('express');
const path = require('path'); // Import the path module
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello MERN World!');
});
app.get('/video/:id', (req, res) => {
    let videoId = req.params.id;

    // Check if the ID is actually a full YouTube URL
    if (videoId.includes('youtube.com')) {
        // Extract the 'v' parameter from the URL
        const urlParams = new URLSearchParams(new URL(videoId).search);
        videoId = urlParams.get('v');
    }
    
    // Check if videoId is valid before rendering
    if (videoId) {
        res.render('video', { videoId: videoId });
    } else {
        res.status(400).send('Invalid video ID or URL');
    }
});


// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
