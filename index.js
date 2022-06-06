//Required modules
const express = require('express');
const app = express();
const path = require('path');



//Include folder needed
app.use('/webpage', express.static(path.join(__dirname, 'webpage')));



//Set up webpages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'webpage', 'app/main_page.html'));
})

app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'webpage', 'quiz/quiz.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'webpage', 'about/about.html'));
})

app.get('/account', (req, res) => {
    res.sendFile(path.join(__dirname, 'webpage', 'account/account.html'));
})

app.get('/daily-challenge', (req, res) => {
    res.sendFile(path.join(__dirname, 'webpage', 'daily-challenge/daily-challenge.html'));
})

app.get('/tournament', (req, res) => {
    res.sendFile(path.join(__dirname, 'webpage', 'tournament/tournament.html'));
})



//Listen to port
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})