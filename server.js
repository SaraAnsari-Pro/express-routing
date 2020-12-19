const express = require('express');
const app = express();


app.get('/', function(req, res) {
    //res.send('welcome to home page');
    res.sendFile(__dirname + '/index.html')

})



app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html');
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/about.html');

})

app.get('/data', function(req, res) {

    res.send({ ID: 2, Name: "Sara Ansari", Student: "yes" });

})

app.get('/data1', function(req, res) {

    var name = __dirname.toString();
    res.send({ data: name })

})

app.listen(3001, () => {
    console.log('server running on 3001')
})