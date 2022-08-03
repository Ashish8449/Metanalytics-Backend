const Food = require("../models/foodModel");
const catchAsync = require("../utils/catchAsync");

exports.createOne = catchAsync(async (req, res, next) => {
  const {
    name,
    calories,
    protein,
    carb,
    fat,
    acceptedUnits,
    itemWeight,
  } = req.body;
  const newFood = await Food.create({
    name,
    calories,
    protein,
    carb,
    fat,
    acceptedUnits,
    itemWeight,
  });

  await newFood.save();
  res.status(201).json({
    status: "sucess",
    newFood,
  });
});

exports.createArray = async (req, res) => {
  const foodItems = req.body;

  const data = await Food.insertMany(foodItems);
  res.status(201).json({
    status: "success",
    data: "ere",
  });
};

exports.getAll = async (req, res, next) => {
  const data = await Food.find();
  res.status(200).json({
    status: "success",
    data: data,
  });
};
