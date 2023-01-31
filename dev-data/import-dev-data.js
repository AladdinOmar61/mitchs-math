const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Program = require("../models/programModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  // ^ connect locally
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful"));

//read json file
const programs = JSON.parse(
  fs.readFileSync(`${__dirname}/import-data.json`, "utf-8")
);

//import data into db
const importData = async () => {
  try {
    await Program.create(programs);
    console.log("data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//delete all data from collection
const deleteData = async () => {
  try {
    await Program.deleteMany();
    console.log("data successfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
