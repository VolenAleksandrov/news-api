const {getAll, getById, removeById, save, update} = require('../dal/articles.dao');

const createArticle = async ({date, title, description, text}) => {
    const product = {
        date: new Date(date), 
        title,
        description,
        text
    }
    return await save(product);
}

const getArticles = async () => {
    return await getAll();
}

const getArticle = async id => {
    return await getById(id);
}

const deleteArticle = async id => {
    return await removeById(id);
}

const updateArticle = async (id, {date, title, description, text}) => {
    return await update(id, {date: new Date(date), title, description, text});
}

module.exports = {
    createArticle,
    getArticles,
    getArticle,
    deleteArticle,
    updateArticle
};