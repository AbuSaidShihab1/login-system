const mongoose=require("mongoose");
// mongodb+srv://shihabmoni15:XWn73HO5A9xScTtN@cluster0.tbovh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
function database(){

    mongoose.connect("mongodb+srv://shihabmoni15:bg2dK35zOrGrF8TG@cluster0.x2ip4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then((res)=>{
        console.log("Database connected....")
    }).catch((err)=>{
        console.log(err.message+"=>mongoodb connection")
    })
}
module.exports=database;