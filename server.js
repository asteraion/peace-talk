const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'PeaceTalk',
        lesson: null,
        translation: null 
    });
});

app.post('/translate', (req, res) => {
    const thought = req.body.thought;
    // Mock translation for now
    const translation = `When you see [Observation], you feel [Feeling] because you need [Need].`;
    res.render('index', {
        title: 'PeaceTalk',
        lesson: null,
        translation: translation
    });
});

app.get('/lesson', (req, res) => {
    // Mock lesson
    const lesson = { text: "Nothing real can be threatened.", source: "ACIM Intro" };
    res.render('index', {
        title: 'PeaceTalk',
        lesson: lesson,
        translation: null
    });
});

app.listen(port, () => {
    console.log(`PeaceTalk running at http://localhost:${port}`);
});
