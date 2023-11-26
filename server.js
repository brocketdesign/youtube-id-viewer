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
    res.render('video', { videoId: req.params.id });
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
