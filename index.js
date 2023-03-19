import express from "express";

const app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello, this is the root path" }');
});

app.get('/path1', function (req, res) {
    res.send('{ "response": "Hello World, this is a new path" }');
});
app.get('/path2', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});

app.listen(process.env.PORT || 3000);

exports = { app }