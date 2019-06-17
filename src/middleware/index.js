const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const middlewares = [
	// 添加日志中间件
	logger('dev'),
	// 添加解析 POST请求体中JSON格式的参数  中间件
	express.json({
		limit: '400kb'
	}),
	// 添加解析 POST请求体中 urlencoeded 编码的参数 中间件
	express.urlencoded({
		extended: false
	}),
	// 添加 cookie 解析中间件
	cookieParser()
]

module.exports = {
	middlewares,
	regusterMiddleware: (app) => {
		middlewares.forEach(middle => {
			app.use(middle)
		})
	}
}
