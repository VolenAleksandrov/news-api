const Router = require("@koa/router");

const {createArticle, getArticle, getArticles, updateArticle, deleteArticle} = require('../api/news.api');

const router = new Router({
    prefix:'/articles'
})

router.get('/', async ctx => {
    ctx.body = await getArticles();
})

router.post('/', async ctx => {
    let article = ctx.request.body;
    article = await createArticle(article);
    ctx.response.status = 200;
    ctx.body = article;
})

router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getArticle(id);
})

router.delete('/:id', async ctx => {
    const id = ctx.params.id;
    await deleteArticle(id);
})

router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let article = ctx.request.body;
    article = await updateArticle(id, article);
    ctx.response.status = 200;
    ctx.body = article;
})

module.exports = router;