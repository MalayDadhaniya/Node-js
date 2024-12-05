const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../controllers/Products");

router.route("/").get(getUser);
router.route("/create").get(createUser);

module.exports = router;
