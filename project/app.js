const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/process', (req, res) => {
    var english = parseInt(req.query.english);
    var maths = parseInt(req.query.maths);
    var science = parseInt(req.query.science);

    var sum = english + maths + science;

    var msg = `<h1>Your Marks are:</h1> 
        <table>
        <thead>
        <th>Subject</th>
        <th>Marks</th>
        </thead>
        <tbody>
        <tr>
        <td>MATHS</td>
        <td>${maths}</td>
        </tr>
        <tr>
        <td>Science</td>
        <td>${science}</td>
        </tr>
        <tr>
        <td>English</td>
        <td>${english}</td>
        </tr>
        </tbody>
        <tfooter>
        
        </tfooter>

        </table>

        <h1>Total Marks: ${sum}</h1>`;

    res.send(msg)
})


app.listen(3000, () => {
    console.log("Server started");
})