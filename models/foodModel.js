const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  // name, calories, protein, carb, fat, acceptedUnits (array of enum of
  //     ml, liter, kg, g, item, etc), itemWeight (in g) (eg. – average weight of 1 banana is 118g

  name: {
    type: String,
    required: [true, "Please provide a name "],
    unique: true,
    trim: true,
  },
  calories: {
    type: Number,
    required: [true, "Please provide   calories "],
  },
  carb: {
    type: Number,
  },
  fat: {
    type: Number,
  },
  acceptedUnits: {
    type: String,
    enum: ["ml", "liter", "kg", "g", "item"],
    default: "g",
  },
  itemWeight: {
    type: Number,
    default: 100,
  },
});

const Food = mongoose.model("FoodItem", foodItemSchema);

module.exports = Food;
