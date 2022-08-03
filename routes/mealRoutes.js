const express = require("express");
const { createMeal } = require("../controllers/meal.controller");

const router = express.Router();

router.post("/create", createMeal);

router.patch(
  "/update/:id",
 
);

module.exports = router;
