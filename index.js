//Required modules
const express = require('express');
const app = express();
const path = require('path');

//Include folder needed
app.use('/app', express.static(path.join(__dirname, 'app')));

//Set up webpages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'main_page.html'));
})

//Listen to port
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})