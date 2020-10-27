const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const productController = require("../controllers/Product");
const file = require("../middleware/file");

router.post("", checkAuth, file, productController.createProduct);
router.delete("/:id", checkAuth, productController.deleteProduct);
router.put("/:id", checkAuth, productController.updateProduct);

router.get("", (req, res, next) => {
  console.log("get request");
  res.send("req recieved");
});
module.exports = router;
