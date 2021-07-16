const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const users = require("./store");

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
app.get("/app/sites/list", (req, res) => {
  res.statusCode(200).send(users);
});
