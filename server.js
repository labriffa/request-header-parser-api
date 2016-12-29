var express = require("express");
var rhp = require("./modules/request-header-parser");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(require("stylus").middleware(__dirname + '/stylus'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/api/whoami', function(req, res){
    res.writeHead(200, { 'content-type': 'application/json' });
    var whoami = {
        ipaddress: req.headers['x-forwarded-for'],
        language:  rhp.parseLanguage(req.headers['accept-language']),
        software:  rhp.parseSoftware(req.headers['user-agent']),
    };
    res.end(JSON.stringify(whoami));
});

app.get('*', function(req, res){
    res.render('404');
});

app.listen(process.env.PORT||8080);