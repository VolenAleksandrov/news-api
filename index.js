//Import Koa
const Koa = require('Koa');
const bodyParser = require('koa-bodyparser');
const articleRoutes = require('./routes/articles.routes');

//Start App
const app = new Koa();
app.use(bodyParser());
app.use(articleRoutes.routes()).use(articleRoutes.allowedMethods());

//Setup the port
app.listen(3000, 'localhost', () => console.log('Listening on port 3000'));
console.log("Application is running on port 3000");