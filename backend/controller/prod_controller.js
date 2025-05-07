import Product from "../models/Product.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("error is " + error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const product = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "invalid product id" });
  }
  // if(!product.name || !product.price || !product.image){
  //     return res.status(400).json({success:false,message:"Please provide all data"})
  // }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    }); // the new true will return the new updated product
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "invalid id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ success: false, message: "Product not found" });
  }
};
