const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv");
const schema = require("./Models/schema");

env.config();

app.use(cors());
app.use(express.json());

async function main() {
  try {
    await mongoose.connect(process.env.MongoDb);
    console.log("Server Connected to Database");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

main();

app.post("/Login", async (req, res) => {
  try {
    console.log(req.body);
    const { Email, Password } = req.body;
    const LoginData = await schema.findOne({ Email: Email });
    console.log(LoginData);
    if (!LoginData) return res.status(404).json({ msg: "User not found" });
    res.json({ LoginData, msg: "Login Data Collected Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});
app
  .get("/user/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const EditData = await schema.findOne({ _id: id });
      if (!EditData) return res.status(404).json({ msg: "User not found" });
      res.json({ EditData, msg: "Single Data Collected Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  })
  .get("/user", async (req, res) => {
    try {
      const Data = await schema.find({});
      res.json(Data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  })
  .post("/user", async (req, res) => {
    try {
      const Data = new schema(req.body);
      const savedData = await Data.save();
      res.status(201).json({ savedData, msg: "Data Saved Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  })
  .patch("/user/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = await schema.findOneAndUpdate(
        { _id: id },
        { $set: req.body },
        { new: true }
      );
      if (!updatedData) return res.status(404).json({ msg: "User not found" });
      res.json({ updatedData, msg: "Data Updated Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  })
  .delete("/user/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedData = await schema.deleteOne({ _id: id });
      if (deletedData.deletedCount === 0)
        return res.status(404).json({ msg: "User not found" });
      res.json({ msg: "Data Deleted Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  });

app.listen(7000, () => {
  console.log("Server Running on port 7000");
});
