const Product = require("../models/Product");

exports.getProduct = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const productQuery = Product.find();
  let fetchedProducts;
  if (pageSize && currentPage) {
    productQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  productQuery
    .then(documents => {
      fetchedProducts = documents;
      return Product.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        product: fetchedProducts,
        maxProduct: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getProduct = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching product failed!"
      });
    });
};

exports.createProduct = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    sellerName: req.body.sellerName,
    sellerId: req.body.sellerId,
    description: req.body.description,
    image: url + "/images/" + req.file.filename,
    avgrating: 0,
    totalRatings: 0,
    stars: 0,
    itemsLeft: req.body.itemsLeft,
    maxOrder: req.body.maxOrder,
  });
  product.save()
    .then((createdProduct) => {
      res.status(201).json({
        message: "product added successfully",
        result: {
          ...createdProduct,
          id: createdProduct._id,
        },
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occured while adding Product!",
        result: error,
      });
    });
};
exports.updateProduct = (req, res, next) => {
  let imagePath = req.body.Image;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }
  const product = new Product({
    _id = req.body._id,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    sellerName: req.body.sellerName,
    sellerId: req.body.sellerId,
    description: req.body.description,
    image: imagePath,
    itemsLeft: req.body.itemsLeft,
    maxOrder: req.body.maxOrder,
  });
  Product.updateOne({ _id: req.params.id, sellerId: req.userData.userId }, product)
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate post!"
      });
    });
};
exports.deleteProduct = (req, res, next) => {
  const id = req.params.id;
  Product.findByIdAndDelete({ _id: id })
    .then((result) => {
      res.status(200).josn({
        message: "Product Deleted Successfully",
        result: "success",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occurred while deleting at 45",
        result: error,
      });
    });
};
