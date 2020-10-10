var express = require('express');
const { request } = require('../app');
var router = express.Router();
const db = require("../models")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /users/profile
router.get('/register', (req, res)=>{
  res.render('users/register')
})

router.post("/register", (req, res)=>{
  
  db.User.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email
  })
  .then((user)=>{
    res.json(user)
  })
})

// users/orders
router.get("/orders", (req, res)=>{
  db.Orders.findAll()
  .then((orders)=>{
    res.render("users/orders", {
      locals:{
        orders:orders
      }
    })
  })
})

module.exports = router;
