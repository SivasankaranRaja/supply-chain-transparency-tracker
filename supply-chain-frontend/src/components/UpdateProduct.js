import React, { useState } from "react";
import contract from "../blockchain/contract";
import CryptoJS from "crypto-js";

function UpdateProduct() {
  const [form, setForm] = useState({
    productId: "",
    currentLocation: "",
    status: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    const hash = CryptoJS.SHA256(
      form.productId + form.currentLocation + form.status + Date.now()
    ).toString();

    // 1️⃣ Update on Blockchain
    await contract.methods.updateProduct(
      form.productId,
      form.currentLocation,
      form.status,
      hash
    ).send({ from: accounts[0] });

    // 2️⃣ Update in MongoDB (via backend API)
    const mongoResponse = await fetch(`http://localhost:5000/api/products/${form.productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: form.status,
        currentLocation: form.currentLocation,
        blockchainHash: hash
      })
    });

    const mongoResult = await mongoResponse.json();

    if (mongoResponse.ok) {
      setMessage("✅ Product updated on blockchain & database!");
    } else {
      setMessage("⚠️ Blockchain updated, but DB update failed: " + mongoResult.error);
    }

    setForm({ productId: "", currentLocation: "", status: "" });
  } catch (err) {
    console.error(err);
    setMessage("❌ Update failed. See console.");
  }
};

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>✏️ Update Product on Blockchain</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="number"
          name="productId"
          value={form.productId}
          onChange={handleChange}
          placeholder="Product ID"
          required
        />
        <input
          name="currentLocation"
          value={form.currentLocation}
          onChange={handleChange}
          placeholder="New Current Location"
          required
        />
        <input
          name="status"
          value={form.status}
          onChange={handleChange}
          placeholder="New Status"
          required
        />
        <button type="submit">Update Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateProduct;
