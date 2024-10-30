import express from "express";
import mongoose from "mongoose"; //used to connect to mongo db
import dotenv from "dotenv";
import { FunkoPop } from "./models/funkopop.model.js";
import { User } from "./models/user.model.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000; //7000 as alternate port
const MONGO_URL = process.env.MONGO_URL;

app.get("/all-funkos", async (req, res) => {
  try {
    const funkos = await FunkoPop.find({});
    console.log("GET Funkos requested: ", funkos);
    res.json(funkos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST endpoint to add a new Funko Pop
app.post("/funkos", async (req, res) => {
  try {
    const newFunko = new FunkoPop(req.body);
    await newFunko.save();
    res.status(201).json(newFunko);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//connect to database first, then start listening
mongoose
  .connect(MONGO_URL)
  .then(async () => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");

    const userExists = await User.findOne();
    if (!userExists) {
      await User.create({
        username: "testuser",
        email: "testuser@example.com",
      });
      console.log(
        "Created initial user and ensured the `users` collection exists."
      );
    }
    app.listen(PORT, () => {
      console.log("NOW LISTENING ON PORT:", PORT);
    });
  })
  .catch((error) => console.log(error));
