const express = require('express')
const path = require('path')
const nunjucks = require('nunjucks')
const app = express()
const router = require('./src/routes')
const middle = require('./src/middleware')

// 设置视图文件目录
app.set('views', path.join(__dirname, 'views'))

// 设置模板文件后缀名
app.set('view engine', 'html')

// 设置模板引擎
const tempEngine = nunjucks.configure('views', {
   express: app,
   autoescape: true
})

tempEngine.addGlobal('title', 'Express')

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))

// 注册中间件
middle.regusterMiddleware(app)

// 注册路由
router.registerRoute(app)

module.exports = app
