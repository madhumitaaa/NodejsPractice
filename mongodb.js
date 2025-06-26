const{MongoClient}=require('mongodb')
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
let database='e-commerce'
 async function dbConnect()
{
    let result= await client.connect();
     db=result.db(database);
    return db.collection('products');

    //let response=await collection.find({}).toArray();
    //console.log(response);
}
module.exports=dbConnect;