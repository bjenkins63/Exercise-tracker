const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3080;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(require('./routes'));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});