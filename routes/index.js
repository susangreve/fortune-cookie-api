var express = require('express');
var router = express.Router();

var path = require('path');
var fs = require('fs');

console.log("I'm a horrible human being.");


var theFilename = path.join(__dirname, "../public/fortunes/fortunes.txt");
var theFile = fs.readFileSync(theFilename).toString();

global.fortunes = theFile.split("%");
console.log("all done");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET fortune  */
router.get('/api/fortune', function(req, res, next) {

	res.send({
		ok: false,
		message: global.getFortune()
	});
});


global.getFortune = function() {
	var fortune;
	var numLines = 3;//global.fortunes.length;
	var index = Math.round(Math.random() * numLines);
	var line = global.fortunes[index];

	if (line) {
		line = line.trim();
	}
	return line;
};

module.exports = router;
