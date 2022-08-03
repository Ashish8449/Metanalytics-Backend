const Meal = require("../models/mealModel");
const catchAsync = require("../utils/catchAsync");

exports.createMeal  =async function(req, res) {
    const { name, category, foodItems } = req.body;
    const newMeal = await Meal.create({
      name,
      category,
      foodItems,
    });
    await newMeal.save();
  
    res.status(201).json({
      status: "success",
      data: newMeal,
    });
  }


  exports.update = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const meal  = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!meal) {
     throw new Error("please provide vlaid id ");
    }


    res.status(200).json({
      status: "success",
      message: "Updated",
      data:meal
    });
  })