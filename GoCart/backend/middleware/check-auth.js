const jwt = require("jsonwebtoken");
const verifaction_String = process.env.JWT_KEY;
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedtoken = jwt.verify(token, verifaction_String);
    req.userData = { email: decodedtoken.email, userId: decodedtoken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: "user not authenticated!" });
  }
};
