import express from "express";
const router = express.Router();
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/prod_controller.js";

// function to get all the data from mongodb
router.get("/", getProducts);
// function to add product to mongodb
router.post("/", addProduct);

router.put("/:id", updateProduct);
// function to delete product from mongodb
router.delete("/:id", deleteProduct);

export default router;
