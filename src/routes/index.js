const createError = require('http-errors')

const homeRoute = require('./home')
const usersRoute = require('./users')

const routes = {
   '/': homeRoute,
   '/users': usersRoute
}

module.exports = {
   routes,
   registerRoute: (app) => {
      for (let path in routes) {
         app.use(path, routes[path])
      }

      // catch 404 and forward to error handler
      app.use(function(req, res, next) {
         next(createError(404))
      })

      // error handler
      app.use(function(err, req, res, next) {
			res.status(err.status || 500)
			
			let data = {}
			if (process.env.NODE_ENV == 'development') {
				data.error = err
			} else {
				//TODO: do some thing
			}

         res.render('error', data)
      })
   }
}
