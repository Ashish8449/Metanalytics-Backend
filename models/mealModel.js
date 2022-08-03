const mongoose = require("mongoose");
const Food = require("./foodModel");

const mealSchema = new mongoose.Schema({
  name: {
    type: "string",
    trim: "true",
    unique: true,
    requried: [true, "Please provide a  name "],
  },
  category: {
    type: String,
    trim: "true",
    required: [true, "Please provide a category  "],
    enum: ["Breakfast", "Lunch", "Evening Snack", "Dinner"],
  },
  foodItems: {
    type: Array,
  },
});

mealSchema.pre("save", async function(next) {

  const foodItemsPromise = this.foodItems.map(
    async (itemId) => await Food.findById(itemId)
  );
  this.foodItems = await Promise.all(foodItemsPromise);



  next();
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
