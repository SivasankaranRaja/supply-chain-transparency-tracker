import React, { useState } from "react";
import contract from "../blockchain/contract";

function GetProduct() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    if (!productId.trim()) {
      setError("❗ Please enter a valid Product ID");
      return;
    }

    try {
      setLoading(true);
      const data = await contract.methods.getProduct(productId).call();

      setProduct({
        name: data.name,
        origin: data.origin,
        destination: data.destination,
        currentLocation: data.currentLocation,
        status: data.status,
        blockchainHash: data.blockchainHash,
        timestamp: new Date(Number(data.timestamp) * 1000).toLocaleString(),
      });

      setError("");
    } catch (err) {
      setProduct(null);
      setError("❌ Could not fetch product. Make sure the ID exists.");
      console.error("GetProduct Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>🔍 Track Product by ID</h2>

      <input
        type="number"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Enter Product ID"
      />
      <button onClick={fetchProduct} style={{ marginLeft: "10px" }}>
        {loading ? "Fetching..." : "Fetch"}
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
          <p><strong>Timestamp:</strong> {product.timestamp}</p>
        </div>
      )}
    </div>
  );
}

export default GetProduct;
