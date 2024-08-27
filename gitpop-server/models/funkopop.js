// models/FunkoPop.js
import mongoose from "mongoose";

// Define the schema for a Funko Pop
const FunkoPopSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  imageName: {
    type: String,
    required: true,
  },
  series: [{
    type: String,
  }],
});

// Create a model based on the schema
export const FunkoPop = mongoose.model('FunkoPop', FunkoPopSchema, 'funkos');


