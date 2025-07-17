import web3 from "./web3";

// ✅ Paste your actual ABI below (already extracted)
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "productId", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "name", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "status", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "blockchainHash", "type": "string" }
    ],
    "name": "ProductAdded",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "origin", "type": "string" },
      { "internalType": "string", "name": "destination", "type": "string" },
      { "internalType": "string", "name": "currentLocation", "type": "string" },
      { "internalType": "string", "name": "status", "type": "string" },
      { "internalType": "string", "name": "blockchainHash", "type": "string" }
    ],
    "name": "addProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "productId", "type": "uint256" }
    ],
    "name": "getProduct",
    "outputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "origin", "type": "string" },
      { "internalType": "string", "name": "destination", "type": "string" },
      { "internalType": "string", "name": "currentLocation", "type": "string" },
      { "internalType": "string", "name": "status", "type": "string" },
      { "internalType": "string", "name": "blockchainHash", "type": "string" },
      { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
  "inputs": [
    { "internalType": "uint256", "name": "productId", "type": "uint256" },
    { "internalType": "string", "name": "currentLocation", "type": "string" },
    { "internalType": "string", "name": "status", "type": "string" },
    { "internalType": "string", "name": "blockchainHash", "type": "string" }
  ],
  "name": "updateProduct",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
    "inputs": [],
    "name": "productCount",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "name": "products",
    "outputs": [
      { "internalType": "string", "name": "name", "type": "string" },
      { "internalType": "string", "name": "origin", "type": "string" },
      { "internalType": "string", "name": "destination", "type": "string" },
      { "internalType": "string", "name": "currentLocation", "type": "string" },
      { "internalType": "string", "name": "status", "type": "string" },
      { "internalType": "string", "name": "blockchainHash", "type": "string" },
      { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// ✅ Updated contract address from Sepolia deployment
const contractAddress = "0xac7688b679634a62e928dcb7d9438a739d1f8ecb";

// ✅ Connect contract with ABI and address
const contract = new web3.eth.Contract(contractABI, contractAddress);

export default contract;

