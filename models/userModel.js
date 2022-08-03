const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },

  calorieRequirement: {
    type: Number,
    required: [true, "Please provide a valid number"],
  },
  mealPlan: {
    type: [
      {
        date: {
          type: Date,
          required: [true, "Please provide a valid date"],
        },

        meal: {
          type: mongoose.Schema.ObjectId,
          ref: "Meal",
        },
      },
    ],
    default: [],
  },
});



const User = mongoose.model("User", userSchema);

module.exports = User;
