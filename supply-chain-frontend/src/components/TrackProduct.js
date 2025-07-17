// src/components/TrackProduct.js
import React, { useState } from "react";
import contract from "../blockchain/contract";

function TrackProduct() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const fetchProduct = async () => {
    try {
      const data = await contract.methods.getProduct(productId).call();
      setProduct(data);
      setError("");
    } catch (err) {
      console.error("Error fetching product:", err);
      setProduct(null);
      setError("❌ Could not find product with that ID");
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>🔍 Track Product by ID</h3>
      <input
        type="number"
        placeholder="Enter Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={fetchProduct} style={{ marginLeft: "10px" }}>
        Track
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {product && (
        <div style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "10px" }}>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Origin:</strong> {product.origin}</p>
          <p><strong>Destination:</strong> {product.destination}</p>
          <p><strong>Current Location:</strong> {product.currentLocation}</p>
          <p><strong>Status:</strong> {product.status}</p>
          <p><strong>Blockchain Hash:</strong> {product.blockchainHash}</p>
          <p><strong>Timestamp:</strong> {new Date(product.timestamp * 1000).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default TrackProduct;
