const express = require("express");
const bcrypt = require("bcryptjs");
const users = require("./store");

const app = express();
app.use(express.json());
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
  res.status(200).send({
    status: "success",
  });
});

//to get all users
app.get("/app/sites/list", (req, res) => {
  res.status(200).send(users);
});

app.listen(3000, () => {
  console.log("Server is up on port " + 3000);
});
