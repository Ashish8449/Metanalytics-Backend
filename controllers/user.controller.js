const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
exports.createUser = catchAsync(async (req, res, next) => {
  const { name, calorieRequirement, mealPlan } = req.body;
  const newUser = await User.create({
    name,
    calorieRequirement,
    mealPlan,
  });
  await newUser.save();
  res.status(201).json({
    status: "success",
    data: newUser,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!meal) {
    throw new Error("please provide a vlaid id ");
  }

  res.status(200).json({
    status: "success",
    message: "Updated",
    data: user,
  });
});
