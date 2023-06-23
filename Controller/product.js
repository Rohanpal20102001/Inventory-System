const User = require("../Models/user");
const Product = require("../Models/product");

// Add Product
const addProduct = async (req, res) => {
  const { title, description } = req.body;

  try {
    const product = await Product({
      title,
      description,
      user: req.user._id,
    });
    await product.save();

    return res.status(200).json({
      Product: {
        productid: product._id,
        title: product.title,
        description: product.description,
        createdAt: product.createdAt,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//Get Product Details
const getProductDetails = async (req, res) => {
  if (!req.user._id) {
    return res.status(400).send("unAuthorized");
  }
  const { productid } = req.query;

  try {
    const product = await Product.findById(productid);
    if (!product) {
      return res.status(500).json({
        message: "Product doesn't exists",
      });
    }

    return res.status(200).json({
      id: product._id,
      title: product.title,
      description: product.description,
    });
  } catch (err) {
    console.log(err);
  }
};

// Update Product
const updateProduct = async (req, res) => {
  const { productid } = req.query;
  const { title, description } = req.body;

  try {
    const product = await Product.findByIdAndUpdate({ _id: productid }, {});
    if (!product) {
      return res.status(500).json({
        message: "Product is not found",
      });
    }

    if (title) {
      product.title = title;
    }
    if (description) {
      product.description = description;
    }
    await product.save();
    return res.status(200).json({
      id: product._id,
      title: product.title,
      description: product.description,
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  const { productid } = req.query;

  try {
    const product = await Product.findByIdAndDelete(productid);
    if (!product) {
      res.status(500).json({
        message: "Product doesn't exsist",
      });
    }

    res.status(200).json({
      mssage: "Product has been deleted Successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addProduct, // Create
  getProductDetails, // Read
  updateProduct, // Update
  deleteProduct, // Delete
};
