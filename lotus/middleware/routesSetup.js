var path = require('path');
var bodyParser = require('body-parser');

function config_view(express,app,config){
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
      limit: '100mb',
      extended: true
  }));
	app.set('view engine', 'html');

	app.engine('html', require('ejs').renderFile);

	app.set('views', (__dirname + '/../views/html'));
	app.use('/images', express.static(__dirname + '/../views/images'));
	app.use('/styles', express.static(__dirname + '/../views/styles'));
	app.use('/scripts', express.static(__dirname + '/../views/scripts'));
}

module.exports = config_view;
