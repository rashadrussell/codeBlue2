/*
 * GET editor page.
 */

exports.init = function(req, res){
  res.render('editor', { title: 'Express' });
};