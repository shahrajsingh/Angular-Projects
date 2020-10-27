const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signUp = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  bcrypt
    .hash(req.body.Password, 10)
    .then((hash) => {
      const user = new User({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DoB: req.body.DoB,
        Gender: req.body.Gender,
        Email: req.body.Email,
        Password: hash,
        Image: "",
      });

      user
        .save()
        .then((result) => {
          res.status(201).json({ message: "user created.", result: result });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            message: "error occured while creating user at 27",
            result: error,
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "an error has occured while hashing password",
        result: error,
      });
    });
};
exports.Login = (req, res, next) => {
  let fetchedUser;

  User.findOne({ Email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "user not found!", result: "no record!" });
      } else {
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.Password);
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "an error occured while authenticating at 47",
        result: error,
      });
    })
    .then((result) => {
      if (fetchedUser == null || fetchedUser == undefined) {
        return;
      }
      if (!result) {
        return res
          .status(401)
          .json({ message: "Invalid authentication credentials!", result: "" });
      } else {
        const token = jwt.sign(
          { Email: fetchedUser.Email, userId: fetchedUser._id },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          message: "authentication successfull.",
          result: {
            token: token,
            expiresIn: 3600,
            userId: fetchedUser._id,
          },
        });
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .catch((error) => {
      console.log(error);
    });
};
