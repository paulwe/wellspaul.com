var express = require('express')
  , less = require('less-middleware')
  , jade = require('jade')
  , path = require('path')
  , app = express()
  , defaultPort = 8080;

app.configure('production', function() {
  process.on('uncaughtException', function(err) {
    console.log('error', err);
  });
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', jade.renderFile);
app.use(less({
  src: __dirname + '/static',
  compress: 'auto',
  optimization: 2
}));

app.use(function(req, res, next) {
  if (path.extname(req.url) == '.svgz') {
    res.setHeader('Content-Encoding', 'gzip');
  }
  next();
});
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Paul Wells'
  });
});

app.listen((process.argv[2] || defaultPort) >> 0);