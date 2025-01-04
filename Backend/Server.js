const express = require("express")
const cors = require('cors')
const App = express()
const env = require("dotenv")
const schema = require("./Models/schema")
const mongoose= require("mongoose")


env.config()
App.use(cors())
App.use(express.json())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MongoDb)
  console.log("Server Connected");
  
}

App.get('/user/:id',async(req,res)=>{
    try {
    const EditData = await schema.findOne({})
    res.send({EditData,msg:"Single Data Collected Successfully"})
    } catch (error) {
        console.log(error);
        
    }
}).get('/user',async (req,res)=>{
    try {
     const Data= await schema.find({})
     res.json(Data)
    } catch (error) {
        console.log(error);
    }
}).post('/user',(req,res)=>{
    try {
     const Data= new schema(req.body)
     const savedata = Data.save()
     res.send({Data:savedata,msg:"Data Saved Successfully"})
    } catch (error) {
        console.log(error);
    }
}).patch('/user/:id',(req,res)=>{
    const id=req.params.id
    const Updatedata = schema.updateOne(
     {id:id},
     {$set:req.body}
    )
    try{
     res.send({Data:Updatedata,msg:"Data Update Successfully"})
    } catch (error) {
        console.log(error);
    }
}).delete('/user/:id',(req,res)=>{
    const id=req.params.id
    const Deletedata = schema.deleteOne(
     {id:id})
    try {
     res.send({Data:Deletedata,msg:"Data Delete Successfully"})
    } catch (error) {
        console.log(error);
    }
})

App.listen(7000,()=>{
    console.log("Server Running");
})