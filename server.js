const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const lessons = require('./data/lessons.json');
const { translateToNVC } = require('./lib/nvc');
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
    const translation = translateToNVC(thought);
    res.render('index', {
        title: 'PeaceTalk',
        lesson: null,
        translation: translation
    });
});

app.get('/lesson', (req, res) => {
    const randomLesson = lessons[Math.floor(Math.random() * lessons.length)];
    res.render('index', {
        title: 'PeaceTalk',
        lesson: randomLesson,
        translation: null
    });
});

app.get('/philosophy', (req, res) => {
    res.render('philosophy', {
        title: 'Philosophy | PeaceTalk'
    });
});

app.listen(port, () => {
    console.log(`PeaceTalk running at http://localhost:${port}`);
});
