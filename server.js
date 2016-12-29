var express = require("express");
var app = express();

app.get('/api/whoami', function(req, res){
    res.writeHead(200, { 'content-type': 'application/json' });
    var whoami = {
        ipaddress: req.headers['x-forwarded-for'],
        language:  req.headers['accept-language'].replace(/,.+$/,''),
        software:  req.headers['user-agent'].replace(/^.+?\(/,'').replace(/\).+$/,''),
    };
    res.end(JSON.stringify(whoami));
});

app.get('*', function(req, res){
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('404. Page Not Found');
});

app.listen(8080);