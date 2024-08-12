const express = require("express");

const { connectDb } = require("./config/db");

const app = express();

const port = 8000;

const cors = require("cors");

//mongodb connection
connectDb();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`server is start on port :- ${port}`);
});
