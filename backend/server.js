const express = require("express");
const notesData = require("./data/notes");
const dotenv = require("dotenv");
dotenv.config();

//const connectDBBYMongoose = require("./config/configDb");
const userRoutes = require("./routes/userRouter");
//connectDBBYMongoose();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on PORT -5000");
});

app.get("/", (req, res) => {
  res.send(
    "Contratulations..., Welcome to node server on port 5000... Your API is Running"
  );
});

app.get("/api/notes", (req, res) => {
  console.log("hi api - ");
  res.json(notesData);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notesData.find((n) => n._id === req.params.id);
  res.send(note);
});

//app.use();
