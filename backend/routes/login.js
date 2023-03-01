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
    console.log("Db Data", data);
    jwt.sign(data, secretKey, { expiresIn: "3000s" }, async (err, token) => {
      if (err) {
        res.send("invalide data");
      } else {
        res.send({ token: token, status: "success" });
      }
    });
  } else {
    res.send({ status: "failed", msg: "invalid user" });
  }

  //});
});
router.post("/profile", varifyToken, async (req, res) => {
  console.log("get user from the token", authUser);
  var data = dbObj.getDB().collection("products");
  data = await data.find().toArray();
  res.send(data);
});

router.get("/getproducts", varifyToken, async (req, res) => {
  var data = dbObj.getDB().collection("products");
  data = await data.find().toArray();
  res.send({status:'success',data:data,msg:'product list fetch successfully'});
});

router.post("/addproduct", varifyToken, async(req, res, next) => {
  let db=dbObj.getDB();
  var data = db.collection("products");
  console.log("collection",data);
  let insert =await data.insertOne(req.body);
  if (insert) {
    console.log(insert);
    res.send(insert);
  }
});

router.get("/productsearch/:key",async (req,resp)=>{
  console.log(req.params.key)
  var db = dbObj.getDB().collection("products");
  let key=req.params.key;
  // Start with string
  // db.collection.find({zip:{'$regex' : '^string', '$options' : 'i'}}) or  { name: new RegExp('^'+key) };
  // End with string
  // db.collection.find({zip:{'$regex' : 'string$', '$options' : 'i'}}) or  { name: new RegExp(key+'$') };
  // Contains string
  // db.collection.find({zip:{'$regex' : 'string', '$options' : 'i'}}) or  { name: new RegExp(key) };
  // Doesn't Contains string
  // db.collection.find({zip:{'$regex' : '^((?!string).)*$', '$options' : 'i'}})
  var query = { name: new RegExp(key) };
  let data = await db.find(query).toArray();
  resp.send(data);

})

function varifyToken(req, res, next) {
  var auth = req.headers["authorization"];
  if (!auth || auth == "undefined") {
    res.send({status:'failed',msg:"token not found"});
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
