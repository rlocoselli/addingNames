var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    console.log("teste");
    res.render("hello");
});

module.exports = router;