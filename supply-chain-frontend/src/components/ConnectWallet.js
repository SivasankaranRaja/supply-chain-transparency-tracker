import React, { useState, useEffect } from "react";

function ConnectWallet({ onWalletConnected }) {
  const [account, setAccount] = useState("");

  // Ensure MetaMask is on Sepolia Testnet
  async function switchToSepolia() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xaa36a7' }], // Sepolia chainId in hex
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0xaa36a7',
              chainName: 'Sepolia Testnet',
              nativeCurrency: {
                name: 'SepoliaETH',
                symbol: 'ETH',
                decimals: 18,
              },
              rpcUrls: ['https://rpc2.sepolia.org'],
              blockExplorerUrls: ['https://sepolia.etherscan.io'],
            }],
          });
        } catch (addError) {
          console.error("Failed to add Sepolia:", addError);
        }
      } else {
        console.error("Failed to switch to Sepolia:", switchError);
      }
    }
  }

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await switchToSepolia(); // ✅ Force Sepolia before asking for accounts
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        if (onWalletConnected) onWalletConnected(accounts[0]);
      } catch (err) {
        console.error("User rejected wallet connection or failed to switch:", err);
      }
    } else {
      alert("🦊 Please install MetaMask extension!");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        const acc = accounts[0] || "";
        setAccount(acc);
        if (onWalletConnected) onWalletConnected(acc);
      });
    }
  }, [onWalletConnected]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "🔗 Connect Wallet"}
      </button>
    </div>
  );
}

export default ConnectWallet;
