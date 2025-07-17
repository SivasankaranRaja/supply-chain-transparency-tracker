const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const crypto = require("crypto");

// ➕ Add a new product
router.post("/add", async (req, res) => {
  try {
    const hash = crypto
      .createHash("sha256")
      .update(JSON.stringify(req.body) + Date.now())
      .digest("hex");

    const newProduct = new Product({
      ...req.body,
      blockchainHash: hash,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📦 Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Update product by MongoDB _id
router.put("/:id", async (req, res) => {
  const { status, currentLocation, blockchainHash } = req.body;

  try {
    const newHash =
      blockchainHash ||
      crypto
        .createHash("sha256")
        .update(JSON.stringify({ status, currentLocation }) + Date.now())
        .digest("hex");

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        status,
        currentLocation,
        blockchainHash: newHash,
        timestamp: Date.now(),
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Product not found" });

    res.json({ message: "Product updated in DB", product: updated });
  } catch (err) {
    console.error("❌ MongoDB Update Error:", err);
    res.status(500).json({ error: "MongoDB update failed" });
  }
});

module.exports = router;
