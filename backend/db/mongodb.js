const {MongoClient} = require('mongodb')
const url= 'mongodb://0.0.0.0:27017/';
const databaseName='e-comm'
const client= new MongoClient(url);
var db;
var dbObj={
 connect:async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db;
},
getDB: function(){
    return db;
}
}
module.exports= dbObj;