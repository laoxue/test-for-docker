const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path');

const home = serve(path.join(__dirname) + '/public/');

app.use(home);
app.listen(3000,() => console.log(`server is running!`));