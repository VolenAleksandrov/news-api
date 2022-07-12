const {MongoClient} = require("mongodb");

const client = new MongoClient('mongodb://admin:admin@localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
    if(err){
        console.log(err);
        process.exit(-1);
    }  
    console.log("Successfully connected to MongoDB");
});

module.exports = client;