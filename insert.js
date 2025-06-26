const dbConnect=require('../mongodb');
const insertOne=async()=>{
    const db= await dbConnect();
    const result=await db.insertMany(
        [
        { name:'iphone',brand:'apple',price:320,catagory:'mobile'},
        { name:'vivo',brand:'V12',price:330,catagory:'mobile'},
        { name:'Oneplus',brand:'OP7',price:320,catagory:'mobile'}
        ]
    );
    if(result.acknowledged)
    {
            console.log("data inserted")
    }
}
insertOne()