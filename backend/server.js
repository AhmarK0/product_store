import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.js"; // the default export from the product.js which is router we can call it anything when we import a default export thing
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config(); // to be able to access the variables in the .env file
/*
if someone to post req to /product then do the following

1. put the req body in variable product
2. check if anything is missing 
3. Create a new document to save it in the collection like const newProduct = Product(product)
4. save the newProduct in the db
5. send a 201 response and json with success true and data newproduct
*/

//comment added

app.use(express.json()); // it is a middleware allow us to use json in req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server running on port " + PORT);
});
