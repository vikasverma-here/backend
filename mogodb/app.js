
const {MongoClient, Collection} = require("mongodb")

const URI = "mongodb+srv://vikasfirst:vLbuQgzFE2VoyXEO@cluster0.r9hmh.mongodb.net/"

const client= new MongoClient(URI)

const dbName = "firstDb"

async function main(){
    await client.connect()
    console.log("connected sucessfullty to server")
    const db = client.db(dbName)
    const Collection = db.collection("userDetaiils")

    const data = {

        firsname:"suneel",
        lastname:"suneel",
        city:"lko",
    }

    const insertResult = await Collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

    // find all te on database 
    const findResult = await Collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return "done";
}

main()
.then(console.log)
.catch(console.log)
.finally(()=>client.close())