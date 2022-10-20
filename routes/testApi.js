var express = require("express");
var router = express.Router();

router.get("/", function (req,res) {
    res.send("dapi is working fine");
});

module.exports = router;