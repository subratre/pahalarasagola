const express = require("express");
const { getHomePage } = require("../controller/home");

const router = express.Router();

router.get("/", getHomePage);

exports.router = router;
