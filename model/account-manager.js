var mongoose = require('mongoose');
var DBNAME   = "codeBlue";
var DBHOST   = "localhost";
var DBPORT   = "27017";

mongoose.connect('mongodb://localhost/codeBlue');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

var schema = new mongoose.Schema({
	firstname: String,
	 lastname: String,
	    email: String,
	 password: String
});

var User = module.exports.User = mongoose.model('User', schema);

/*
var user = new User({firstname: 'Rashad', lastname: 'Russell', email: 'email@address.com', password: 'pass'});
user.save( function(err) {
	if(err) throw err;
	console.log('added user');
});
*/
