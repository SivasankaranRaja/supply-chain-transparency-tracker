import React, { useState } from "react";
import axios from "axios";
import contract from "../blockchain/contract";
import CryptoJS from "crypto-js";

function AddProduct({ onAdded }) {
  const initialState = {
    name: "",
    origin: "",
    destination: "",
    currentLocation: "",
    status: "Packed", // default status
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const hash = CryptoJS.SHA256(JSON.stringify(form) + Date.now()).toString();
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Send to smart contract
      await contract.methods.addProduct(
        form.name,
        form.origin,
        form.destination,
        form.currentLocation,
        form.status,
        hash
      ).send({ from: accounts[0] });

      // Send to backend MongoDB
      await axios.post("http://localhost:5000/api/products/add", {
        ...form,
        blockchainHash: hash
      });

      alert("✅ Product added to Blockchain & MongoDB!");
      setForm(initialState);
      if (onAdded) onAdded();

    } catch (err) {
      console.error("❌ Error adding product:", err);
      alert("❌ Failed to add product. See console.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h3>➕ Add New Product</h3>

      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
      <input name="origin" placeholder="Origin" value={form.origin} onChange={handleChange} required />
      <input name="destination" placeholder="Destination" value={form.destination} onChange={handleChange} />
      <input name="currentLocation" placeholder="Current Location" value={form.currentLocation} onChange={handleChange} />

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Packed">Packed</option>
        <option value="In Transit">In Transit</option>
        <option value="Delivered">Delivered</option>
        <option value="Pending">Pending</option>
      </select>

      <button type="submit" style={{ marginLeft: "10px" }}>Add Product</button>
    </form>
  );
}

export default AddProduct;
