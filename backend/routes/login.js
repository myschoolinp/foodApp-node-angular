var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var secretKey = "1234567890";
const dbObj = require("../db/mongodb");
var authUser;
/* GET home page. */
router.post("/user", async (req, res, next) => {
  var data = dbObj.getDB().collection("admnlogin");
  data = await data.find().toArray();
  if (data.length) {
    data = data[0];
  }
  if (
    req.body.mobileNumber == data.mobileNumber &&
    req.body.password == data.password
  ) {
    console.log("Db Data",data);
    jwt.sign(data, secretKey, { expiresIn: "3000s" }, async (err, token) => {
      if (err) {
        res.send("invalide data");
      } else {
        res.send({ token: token, status: "success" });
      }
    });
  } else {
    res.send({ status: "failed",errMsg:'invalid user' });
  }

  //});
});
router.post("/profile", varifyToken, async (req, res) => {
  console.log("get user from the token", authUser);
  var data = dbObj.getDB().collection("products");
  data = await data.find().toArray();
  res.send(data);
});

function varifyToken(req, res, next) {
  var auth = req.headers["authorization"];
  if (!auth || auth == "undefined") {
    res.send("Invalid token");
  } else {
    console.log("2");
    var key = auth.split(" ")[1];
    jwt.verify(key, secretKey, (err, auth) => {
      authUser = auth;
      if (err) {
        console.log("Token Error", JSON.stringify(err));
        res.send(JSON.stringify(err));
      } else {
        next();
      }
    });
  }
}

module.exports = router;
