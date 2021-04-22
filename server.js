
var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());              
app.use(bodyParser.urlencoded({ extended: true }));

//Create Database Connection
var pgp = require('pg-promise')();

let dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'nfg_db',
    user: 'postgres',
    password: 'pwd'
};


const isProduction = process.env.NODE_ENV === 'production';
dbConfig = isProduction ? process.env.DATABASE_URL : dbConfig;
let db = pgp(dbConfig);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


// home page
app.get('/', function(req, res) {
	res.render('pages/main',{
		local_css:"style.css",
		my_title:"Home Page"
	});
});

// home page
app.get('/main', function(req, res) {
	res.render('pages/main',{
		local_css:"style.css",
		my_title:"Home Page"
	});
});

app.get('/planets', function(req, res) {
	res.render('pages/planets',{
		local_css:"style.css",
		my_title:"/planets"
	});
});

app.get('/main-sequence', function(req, res) {
	res.render('pages/main-sequence',{
		local_css:"style.css",
		my_title:"/main-sequence"
	});
});

app.get('/red-giants', function(req, res) {
	res.render('pages/red-giants',{
		local_css:"style.css",
		my_title:"/red-giants"
	});
});

app.get('/red-super-giants', function(req, res) {
	res.render('pages/red-super-giants',{
		local_css:"style.css",
		my_title:"/red-super-giants"
	});
});

app.get('/white-dwarfs', function(req, res) {
	res.render('pages/white-dwarfs',{
		local_css:"style.css",
		my_title:"/white-dwarfs"
	});
});

app.get('/neutron-stars', function(req, res) {
	res.render('pages/neutron-stars',{
		local_css:"style.css",
		my_title:"neutron-stars"
	});
});

app.get('/black-holes', function(req, res) {
	res.render('pages/black-holes',{
		local_css:"style.css",
		my_title:"/black-holes"
	});
});

app.get('/asteroids', function(req, res) {
	res.render('pages/asteroids',{
		local_css:"style.css",
		my_title:"/asteroids"
	});
});