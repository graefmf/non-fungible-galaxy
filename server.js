
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

