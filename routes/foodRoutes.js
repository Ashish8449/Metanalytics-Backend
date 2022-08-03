const express = require("express");
const {
  createOne,
  createArray,
  getAll,
} = require("../controllers/food.controller");

const router = express.Router();

router.route("/create").post(createOne);

//  to add all food items onces
router.route("/addArray").post(createArray);
router.route("/getall").get(getAll);

module.exports = router;
