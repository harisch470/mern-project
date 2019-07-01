const express = require("express");
const mongoose = require("mongoose");

//routes Import
const user = require("./routes/api/users");
const post = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

// Get Database key
const db = require("./config/key").mongoURI;

//connect database
mongoose
  .connect(db)
  .then(() => console.log("Mongo Connected"))
  .catch(err => console.log(err));

//routes
app.get("/", (req, res) => res.send("Hello.."));
app.use("/api/users", user);
app.use("/api/posts", post);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
