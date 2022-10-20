const Koa = require("koa");
// const context = require("koa/lib/context");


const app = new Koa();
//cts context

// 通过app.use 注册中间件
// 中间件本质就是函数
// context 上下文 当前请求的相关信息都在里面
app.use(async (ctx, next) => {
  console.log(1);
  await next()
  console.log(4);
})

app.use(async (ctx, next) => {
  console.log(2);
  await next();
  console.log(5);
})

app.use(async (ctx, next) => {
  console.log(3)
  await next()
  console.log(6);
})
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
app.listen(3000, () => {
  console.log(`启动成功`);
});
