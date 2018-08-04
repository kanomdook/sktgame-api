var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    glob = require('glob'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express();
var router = express.Router();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', router);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sktgame-db', { useNewUrlParser: true });
mongoose.set('debug', true);

glob.sync(path.join(__dirname, '**/models/*.model.js')).forEach(function (file) {
    require(path.resolve(file))(mongoose);
});

glob.sync(path.join(__dirname, '**/routes/*.route.js')).forEach(function (file) {
    require(path.resolve(file))(router);
});

var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + server.address().port);
});