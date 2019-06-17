const BaseController = require('./baseContro')

class HomeController extends BaseController {
   constructor(name) {
      super(name)
   }

   main(req, res, next) {
		super.main(req, res, next)
		
      res.render('index', {
         msg: 'Hello Express'
      })
   }

}

module.exports = HomeController
