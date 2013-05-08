/*
 * GET signup page.
 */

exports.init = function(req, res){
  res.render('signup', { title: 'Express' });
};