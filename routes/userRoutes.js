const express = require("express");
const { createUser, updateUser } = require("../controllers/user.controller");


const router = express.Router();

router.post("/create", createUser);
router.patch("/update/:id", updateUser);

module.exports = router;
