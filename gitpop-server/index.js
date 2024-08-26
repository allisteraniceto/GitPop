import express from "express";
import mongoose from "mongoose"; //used to connect to mongo db
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000; //7000 as alternate port
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
    app.listen(PORT, () => {
      console.log("NOW LISTENING ON PORT:", PORT);
    });
  })
  .catch((error) => console.log(error));
