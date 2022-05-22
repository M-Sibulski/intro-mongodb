const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    console.log("Connected sucessfully to server");
    const database = client.db('fruits_DB');
    const fruits = database.collection('fruits');
    const result = await fruits.insertMany([
        {
            name : "Apple",
            score: 8,
            review: "Great fruit"
        }, 
        {
            name : "Orange",
            score: 6,
            review: "Kinda sour"
        }, 
        {
            name : "Banana",
            score: 9,
            review: "Great stuff!"
        } 
    ]);
    console.log("Number of documents inserted: " + result.insertedCount);
    ///const query = { title: 'Banana' };
    //const fruit = await fruits.findOne(query);
    //console.log(fruit);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);