const express = require("express")
const App = express()
const env = require("dotenv")
const schema = require("./Backend/Controllers/Models/schema")
const mongoose= require("mongoose")


env.config()
App.use(express.json())

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MongoDb)
  console.log("Server Connected");
  
}

App.get('/Savedata',(req,res)=>{
    try {
     const Data= new schema(req.body)
     const savedata = Data.save()
     res.send({Data:savedata,msg:"Data Saved Successfully"})
    } catch (error) {
        console.log(error);
    }
})

// App.post('/Uploadata',(req,res)=>{
//     try {
//      const Data= new schema(req.body)
//      const savedata = Data.save()
//      res.send({Data:savedata,msg:"Data Saved Successfully"})
//     } catch (error) {
//         console.log(error);
//     }
// })

App.patch('/Updatedata',(req,res)=>{
    const id=req.params.id
    const Deletedata = schema.updateOne(
     {id:id},
     {$set:req.body}
    )
    try{
     res.send({Data:updatedata,msg:"Data Update Successfully"})
    } catch (error) {
        console.log(error);
    }
})


App.delete('/Savedata',(req,res)=>{
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