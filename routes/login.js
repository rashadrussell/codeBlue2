/*
 * GET login page.
 */

exports.init = function(req, res){
  res.render('login', { title: 'Express' });
};