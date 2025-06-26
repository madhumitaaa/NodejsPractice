//each collection will have its own module and schemas
const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    catagory:String
});
module.exports=mongoose.model('products',productSchema)
