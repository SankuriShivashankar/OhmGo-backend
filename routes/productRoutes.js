import express from "express";
import Product from "../models/Product.js";
import { protectAdmin } from "../middleware/auth.js";

const router = express.Router();

// ADD PRODUCT
router.post("/", protectAdmin, async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET SINGLE PRODUCT
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
});

// DELETE PRODUCT
router.delete("/:id", protectAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;
