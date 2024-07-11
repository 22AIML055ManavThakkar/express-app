const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/home.html');
});

app.get('/home', (req, res) => {
    res.sendfile(__dirname + '/home.html');
});

app.get('/about', (req, res) => {
    res.sendfile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
    res.sendfile(__dirname + '/contact.html');
});

// app.get('/cake/ahmedabad', (req, res) => {
//     res.send(`Hello ahmedabad`);
//     res.end();
// });

// app.get('/cake/rajkot', (req, res) => {
//     res.send('Hello rajkot');
//     res.end();
// });

// app.get('/cake/anand', (req, res) => {
//     res.send('Hello anand');
//     res.end();
// });

// app.get('/cake/surat', (req, res) => {
//     res.send('Hello surat');
//     res.end();
// });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});