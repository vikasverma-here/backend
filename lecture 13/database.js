const { MongoClient } = require('mongodb');

const url ="mongodb+srv://namastedev:CSeEjkrlz3YHPwtf@cluster0.1ijnr.mongodb.net/"
const client = new MongoClient(url);
const dbName = 'HellowWorld';


async function main() {
  
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db();
    const collection = db.collection('user');
  

  
    return 'done.';
  }
  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());