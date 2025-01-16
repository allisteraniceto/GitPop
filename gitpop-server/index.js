import express from "express";
import mongoose from "mongoose"; //used to connect to mongo db
import dotenv from "dotenv";
import cors from "cors";
import { FunkoPop } from "./models/funkopop.model.js";
import { User } from "./models/user.model.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000; //7000 as alternate port
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

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
app.post("/add-funko", async (req, res) => {
  try {
    const newFunko = new FunkoPop(req.body);
    await newFunko.save();
    res.status(201).json(newFunko);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET endpoint to retrieve users collection
app.get("/user-funkos", async (req, res) => {
  try {
    // retreive specific user's inventory
    const user = await User.findOne(
      { username: "testuser" },
      { inventory: 1, _id: 0 } // 1 means include, 0 means exclude
    );
    res.json(user.inventory);
    console.log("GET User Inventory:", user.inventory);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST endpoint to add a Funko Pop to a user's inventory

app.post("/add-to-inventory", async (req, res) => {
  try{
    //find user
    //add new funko to user's inventory
    const newFunko = req.body;

    const user = await User.findOne({username: "testuser"});

    if (!user) {
      return res.status(404).send("User not found");
    }

    user.inventory.push(newFunko);

    await user.save();

    res.status(201).json(newFunko);
  } catch (error){
    res.status(500).send(error.message);
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
