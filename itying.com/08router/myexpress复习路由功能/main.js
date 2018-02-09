var http = require('http');

var app = require('./model/express');

http.createServer(app).listen(3000, '127.0.0.1', function() {
    console.log('Server listen on 3000');
})

app.get('/hello', function(req, res) {
    console.log('get hello');
    res.send('get hello');
});
app.post('/hello', function(req, res) {
    console.log('post hello');
    res.send('post hello');
})
