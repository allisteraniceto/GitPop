import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  //   passwordHash: { type: String, required: true },
  inventory: [
    {
      popID: { type: String, ref: "Funko", required: true },
      funkoName: { type: String },
      quantity: { type: Number, default: 1 },
      acquiredDate: { type: Date, default: Date.now },
      notes: { type: String },
      price: { type: Number, default: 0, required: true },
    },
  ],
});

export const User = mongoose.model("User", userSchema, "users");
