const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

//load env vars
dotenv.config({ path: "./config/config.env" });
//connect DB
mongoose.connect(
  "mongodb+srv://manju123:manju123@cluster0.uxaci.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => console.log("mongoDB connected")
);

//import routes
const authRoute = require("./routes/auth");

//routes middleware
app.use("/api/user", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listing at ${PORT}  `));
