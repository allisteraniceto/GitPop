import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  //   passwordHash: { type: String, required: true },
  inventory: [
    {
      popId: { type: Schema.Types.ObjectId, ref: "Funko", required: true },
      funkoName: { type: String },
      quantity: { type: Number, default: 1 },
      acquiredDate: { type: Date, default: Date.now },
      notes: { type: String },
    },
  ],
});

export const User = mongoose.model("User", userSchema, "users");
