const mongoose = require("mongoose");
const Product = require("./models/contract"); 

app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

const ProductSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    origin: { type: String, required: true },
    status: { type: String, default: "Created" },
    timestamp: { type: Date, default: Date.now },
    ipfsHash: { type: String }, // Optional: for certification file on IPFS
    contractHash: { type: String } // Optional: for blockchain contract reference
});


module.exports = mongoose.model("Product", ProductSchema);
