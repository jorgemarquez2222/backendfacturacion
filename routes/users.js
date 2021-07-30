var express = require("express");
const db = require("../config/database");
var router = express.Router();

const { Users } = require("../models/users");

const login = async ({ user, pass }) => {
  console.log(user, pass)
  let dataUser = await Users.findOne({ where: { user, pass } });
  dataUser = dataUser
  if (!dataUser) {
    return {
      success: false,
      name: "",
    };
  }
  return {
    success: true,
    data: { 
      name: dataUser.name,
      userType: dataUser.user_type
    }
  };
};
/* GET users listing. */
router.post("/", async function (req, res, next) {
  try {
    const { user, pass } = req.body;
    const isValidUser = await login({ user, pass });
    if (!isValidUser.success) {
      res.status(403).json({ success:false, data: "", error: "is not valid User" });
      return;
    }
    res.status(200).json({ 
      success:true, 
      data: isValidUser.data, 
      error: "WithOut Error" });
    return;
  } catch (e) {
    console.log("No conectado");
    console.log(e.stack);
  }
});

module.exports = router;
