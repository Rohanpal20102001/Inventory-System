const express = require("express");
const {
  addProduct,
  getProductDetails,
  updateProduct,
  deleteProduct,
} = require("../Controller/product");
const productRouter = express.Router();

const { auth } = require("../Middleware/auth");

productRouter.post("/add-product", auth, addProduct);
productRouter.get("/get-product", auth, getProductDetails);
productRouter.put("/update-product", auth, updateProduct);
productRouter.delete("/delete-product", auth, deleteProduct);

module.exports = productRouter;
