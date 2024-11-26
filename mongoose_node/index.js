const mongoose=require('mongoose')

const uri ="mongodb://127.0.0.1/shop"

mongoose.connect(uri);

//we need to create schema
const productSchema=new mongoose.Schema({
    name:String,
    company:String,
    price:Number,
    colors:[String],
    image:String,
    category:String,
    isFeatured:Boolean,
})

//we need to create model
 const Product=new mongoose.model('Product',productSchema)

 const main=async()=>{
    try{
        const data=await Product.find({price:{$eq:3466}})
        console.log(data)
    }catch(error){
     console.log(error)
    }finally{
     mongoose.connection.close()
    }
 }
 main() 