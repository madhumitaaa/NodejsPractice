const mongoose=require('mongoose');

const main=async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-commerce");
    const ProductSchema=new mongoose.Schema(
        {
            name:String,
            price:Number,
            brand:String,
            catagory:String
        } );
//models connect your nodejs to mongo db
const ProductModel=mongoose.model('products',ProductSchema);
let data=new ProductModel({
    name:"m8",
    price:250,
    brand:"max",
    catagory:"mobile"


})
let result= await data.save();
console.log(result);
    };
    main();