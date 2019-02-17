function routesSetup(express ,app , config , calcObj) {
  var router = express.Router();
  router.use(function timeLog (req, res, next) {
    let dateLst = calcObj.currentTime();
    let dateStr = dateLst.slice(0,3).join('/');
    let timeStr = dateLst.slice(3).join(':')
    console.log('(Time log: ['+dateStr+' '+timeStr , ']) :- requested url : ' , req.url);
    next();
  });
  router.get('/',(req , res) => {
    res.render('home_page');
  });
  return router;
}
module.exports = routesSetup;
