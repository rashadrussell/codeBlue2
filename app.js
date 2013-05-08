
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , signup = require('./routes/signup')
  , login = require('./routes/login')
  , editor = require('./routes/editor')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , jQuery = require('jquery')
  , mongoose = require('mongoose')
  , AM = require('./model/account-manager.js')
  , User = AM.User;

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// home page
app.get('/', routes.index);

// signup page
app.get('/signup', signup.init);

app.post('/signup', function(req, res) {
    
    var formInput = JSON.stringify( req.body );
    formInput = jQuery.parseJSON( formInput );

    var user = new User({firstname: formInput.firstname, lastname: formInput.lastname, email: formInput.email, password: formInput.password});

      user.save(function (err) {

        if (err) {
          throw err;
        } else {
          res.redirect('/login');
        }
    });
});

// login page
app.get('/login', login.init);

app.post('/login', function(req, res) {

      var formInput = JSON.stringify( req.body );
      formInput = jQuery.parseJSON( formInput );

      User.find({email: formInput.email, password: formInput.password}, function(err, person) {

        if(err) {
          res.json(err);
        } else if(person == null || !person) {
          res.json('User not found!');
        } else {
          res.redirect('http://127.0.0.1:8000/');
        }
          

      });


  });

// editor page
app.get('/editor', editor.init);

// people page



// users page
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
