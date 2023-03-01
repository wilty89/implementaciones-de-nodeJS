const express = require("express");
const { getUsers,addUsers } = require("../controllers/users.controller");
const userModel = require("../models/models");
const router = express.Router();

router.post("/add_user", addUsers );

router.get("/userst",getUsers );

module.exports = router;