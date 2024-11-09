const express=require("express");
const app=express();
const port=process.env.port || 4000;
const database=require("./config/database");
const cors=require("cors");
const adminmodel = require("./models/Adminmodel");

app.use(express.json())
app.use(cors())
database();
app.get("/",(req,res)=>{
    try{
        res.send("hello shihba")
    }catch(err){
        console.log(err)
    }
});
app.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        console.log(email,password)
        const find_email=await adminmodel.findOne({email:email});
        if(find_email){
            if(find_email.password==password){
                         res.send({success:true,message:"Login successful!",admin_info:find_email})
            }else{
            res.send({success:false,message:"Email and Password did not match!"})
            }
        }
            res.send({success:false,message:"Email and Password did not match!"})
    } catch (error) {
        console.log(error)
    }
})
app.get("/profile",async (req,res)=>{
    try {
       const find_admin=await adminmodel.find();
       res.send({admin_info:find_admin})
    } catch (error) {
        console.log(error)
    }
});
app.post("/update-profile",async (req,res)=>{
    try {
        const {email,password}=req.body;
       const find_admin=await adminmodel.findOne({email:email});
       if(find_admin){
               const update_data=await adminmodel.findByIdAndUpdate({_id:find_admin._id},{$set:{email,password}})
                  res.send({success:true})
            }
    } catch (error) {
        console.log(error)
    }
});
app.listen(port,()=>{
    console.log(`Your server is running on ${port}`)
})