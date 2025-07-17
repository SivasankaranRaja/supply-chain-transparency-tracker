import React from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import ConnectWallet from "./components/ConnectWallet";
import GetProduct from "./components/GetProduct"; // ✅ Should match file name exactly
import UpdateProduct from "./components/UpdateProduct";

function App() {
  const [refresh, setRefresh] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧾 Supply Chain Transparency Tracker</h1>

      <ConnectWallet onWalletConnected={(addr) => setWalletAddress(addr)} />

      <AddProduct onAdded={() => setRefresh(!refresh)} />
      <ProductList key={refresh} />

      {/* ✅ Track Product by ID */}
      <GetProduct />
      <UpdateProduct onUpdated={() => setRefresh(!refresh)} />

    </div>
  );
}

export default App;
