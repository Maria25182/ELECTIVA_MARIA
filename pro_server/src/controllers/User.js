const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res) {
  const user = new User();
  const { email, password, repeatPassword } = req.body;
  user.email = email;
  user.role = "admin";
  user.active = true;
  if (!password || !repeatPassword) {
    res.status(404).send({ message: "Las contraseñas son obligatorias" });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({ message: "las contraseñas no conciden" });
    } else {
      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res.status(500).send({ message: "Error al encriptar la contraseña" });
        } else {
          user.password = hash;
          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "el usuario ya existe" });
            } else {
              if (!userStored) {
                res.status(400).send({ message: "Error al crear al usuario" });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

module.exports = { signUp };
