const express = require("express");
const router = express.Router();
const conn = require("../db");

router.post("/", async (req, res) => {
    var temp = "UPDATE inventory SET ";

    if(req.body.price != ''){
        temp += "price = " + req.body.price + ", ";
    }
    if(req.body.cal != ''){
        temp += "calories = \'" + req.body.type + "\', ";
    }
    if(req.body.type != ''){
        temp += "product_type = \'" + req.body.type + "\', ";
    }

    const query = temp.substring(0, temp.length-2) + " WHERE product_id = \'" + req.body.id + "\'";


    await conn.db.query(query);
});

module.exports = router;
