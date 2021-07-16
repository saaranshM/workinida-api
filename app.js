const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const users = require("./store");

// to add new user
app.post("/app/sites", async (req, res) => {
  const { website, username, password } = req.body;
  //encrypts password with hasshing
  const encryptedPassword = await bcrypt.hash(password, 8);
  const newObj = {
    website,
    username,
    password: encryptedPassword,
  };
  users.push(newObj);
  res.statusCode(200).send({
    status: "success",
  });
});

//to get all users
app.get("/app/sites/list", (req, res) => {
  res.statusCode(200).send(users);
});

app.listen(() => {
  console.log("Server is up on port " + 3000);
});
