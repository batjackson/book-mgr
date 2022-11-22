const Koa = require('koa')
const koaBody = require('koa-body')
// const Router = require('@koa/router')
const { connect } = require('./db')
const registerRoutes = require('./routers')
const koaStatic = require('koa-static')
const { middleware: koaJwtMiddleWare, catchTokenError,checkUser } = require('./helpers/token')
const { logMiddleware } = require('./helpers/log')
const cors = require('@koa/cors')
const path = require('path')
const config = require('./project.config')
const app = new Koa()
app.use(koaStatic(path.resolve(__dirname,'../public')))
connect().then(() => {
  app.use(cors())
  app.use(koaBody({
    multipart: true,
    formidable: {
      maxFileSize:200*1024*1024
    }
  }))

  app.use(catchTokenError)
  koaJwtMiddleWare(app)
  app.use(checkUser)
  app.use(logMiddleware)

  registerRoutes(app)

  app.listen(config.SERVER_POST, () => {
    console.log(`启动成功`)
  })
})

// const authRouter = new Router({
//   prefix: '/auth',
// })

// authRouter.get('/register', async (ctx) => {
//   ctx.body = '注册成功'
// })
// app.use(authRouter.routes())

// const bookRouter = new Router({
//   prefix: '/book',
// })

// bookRouter.get('/list', async (ctx) => {
//   ctx.body = 'book list'
// })

// 通过app.use 注册中间件
// 中间件本质就是函数
// context 上下文 当前请求的相关信息都在里面
// app.use(async (ctx, next) => {
//   console.log(1);
//   await next()
//   console.log(4);
// })

// app.use(async (ctx, next) => {
//   console.log(2);
//   await next();
//   console.log(5);
// })

// app.use(async (ctx, next) => {
//   console.log(3)
//   await next()
//   console.log(6);
// })
// app.use((ctx) => {
//   const { request: req = {} } = ctx;

//   const { url } = req;

//   if (url === "/user") {
//     ctx.response.body = `
//     <h1>主页</h1>
//     `;
//     return;
//   }
//   if (url == "/user/list") {
//     ctx.response.body = `<h1>用户列表</h1>`;
//     return;
//   }
//   ctx.body = "404";
//   const { path = "/" } = ctx;
//   if (path === "/user/123") {
//     ctx.body = "返回应用123信息";
//   }
//   if (path === "/settings") {
//     ctx.body = "返回一些设置的信息";
//   }
// });
// 开启一个http服务
// 接收http 请求 并做处理，处理完后响应
