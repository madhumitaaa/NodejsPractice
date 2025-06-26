const mongoose = require('mongoose');
//here we will be doing CRUD operations with mongoose
    mongoose.connect("mongodb://localhost:27017/e-commerce");
   const ProductSchema = new mongoose.Schema(
        {
            name: String,
            price: Number,
            brand: String,
            catagory: String
        });

const saveInDB = async () => {
    
    //models connect your nodejs to mongo db
    const Product = mongoose.model('product', ProductSchema);

    let data = new Product({
        name: "m8",
        price: 250,
        brand: "max",
        catagory: "mobile"


    })
    let result = await data.save();
    console.log(result);

};
const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        { name: "m8" },
        {
            $set: { price: 800 }
        }
    )
    console.log(data);
};
updateInDB();

const deleteInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne(
        { name: "m8" })
    console.log(data);
}
deleteInDB();

const findInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({name:"iphone"});
    console.log(data);
}
findInDB();
