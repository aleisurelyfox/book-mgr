//每个文件都是一个模块
const Koa = require('koa');


const app = new Koa();

//通过app.use注册中间件
//中间件本质上是一个函数
//context 上下文-当前请求的相关信息都在里面





//开启一个http服务
//接受http请求并做处理，处理完后相应
//https 443
app.listen(3000,() =>{
    console.log('启动成功');
});

console.log('112233');

