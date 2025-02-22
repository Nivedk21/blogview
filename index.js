const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());


mongoose
  .connect("mongodb+srv://nivedk021:nivedk021@cluster0.o9y7d.mongodb.net/blogDB?retryWrites=true&w=majority", { // Change 'blogDB' to your desired database name
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });


const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  img_url: { type: String, required: true }
});

const BlogModel = mongoose.model("Blog", blogSchema); 

app.post("/add", async (req, res) => { 
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.status(201).send({ message: "Blog entry created successfully", blog: newBlog });
  } catch (error) {
    console.log("Error creating blog entry:", error);
    res.status(500).send("Error creating blog entry");
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log("Error fetching blog entries:", error);
    res.status(500).send("Error fetching blog entries");
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});