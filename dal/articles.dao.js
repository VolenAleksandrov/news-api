const articles = require('./index').db('news').collection('articles');

const ObjectId = require('mongodb').ObjectId;

const save = async ({date, title, description, text}) => {
    const result = await articles.insertOne({date, title, description, text});
    return {id: result.insertedId};
}

const getAll = async () => {
    const cursor = await articles.find();
    return cursor.toArray();
}

const getById = async (id) => {
    return await articles.findOne({_id: ObjectId(id)});
}

const update = async (id, {date, title, description, text}) => {
    const result = await articles.replaceOne({_id: ObjectId(id)}, {date, title, description, text});
    return {id};
}

const removeById = async id => {
    await articles.deleteOne({_id:ObjectId(id)});
}

module.exports = {getAll, getById, removeById, save, update};