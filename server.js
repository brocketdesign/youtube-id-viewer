const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello MERN World!');
});
app.get('/video/:id', (req, res) => {
    res.render('video', { videoId: req.params.id });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
