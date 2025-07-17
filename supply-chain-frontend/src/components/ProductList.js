import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ origin: "", status: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  };

  useEffect(() => {
    let result = products;

    if (filters.origin) {
      result = result.filter((p) =>
        (p.origin || "").toLowerCase().includes(filters.origin.toLowerCase())
      );
    }

    if (filters.status) {
      result = result.filter((p) =>
        (p.status || "").toLowerCase() === filters.status.toLowerCase()
      );
    }

    setFiltered(result);
  }, [filters, products]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>📦 All Products</h2>

      {/* Filters */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          name="origin"
          placeholder="Filter by origin"
          value={filters.origin}
          onChange={handleFilterChange}
          style={{ marginRight: "10px" }}
        />

        <select name="status" value={filters.status} onChange={handleFilterChange}>
          <option value="">All Statuses</option>
          <option value="Packed">Packed</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Product Table */}
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Current Location</th>
            <th>Blockchain Hash</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="6">No matching products found.</td>
            </tr>
          ) : (
            filtered.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.origin}</td>
                <td>{product.destination}</td>
                <td>{product.status}</td>
                <td>{product.currentLocation}</td>
                <td style={{ wordBreak: "break-all" }}>{product.blockchainHash}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
