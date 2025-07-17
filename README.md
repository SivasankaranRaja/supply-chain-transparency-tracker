
# 📦 Supply Chain Transparency Tracker

A blockchain-powered web application that enhances transparency and traceability in supply chains using Ethereum smart contracts, MongoDB, and a React frontend. Each product's journey is securely recorded on-chain and in a NoSQL database.

---

## 🌐 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express.js
- **Blockchain**: Ethereum (Solidity Smart Contracts, deployed on Sepolia testnet)
- **Web3 Integration**: Web3.js
- **Database**: MongoDB (Mongoose)
- **File Storage**: IPFS (optional for document tracking)
- **Wallet**: MetaMask

---

## 🚀 Features

- ✅ Add new products with name, origin, destination, and other details
- 🔗 Store product updates on Ethereum blockchain
- 🧾 Sync off-chain product metadata with MongoDB
- 🖥️ View all products in a single dashboard
- 🔄 Update product status and location via UI
- 🔍 Trace full journey using blockchain hash

---

## 📁 Project Structure

```bash
supply-chain-transparency-tracker/
│
├── contracts/              # Solidity smart contracts
├── frontend/               # React UI (Web3 integrated)
├── backend/                # Express + MongoDB API
├── migrations/             # Truffle migration scripts (if using Truffle)
├── build/                  # Compiled contract ABIs
├── .env                    # Environment variables
├── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/SivasankaranRaja/supply-chain-transparency-tracker.git
cd supply-chain-transparency-tracker
```

### 2. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 3. Smart Contract Deployment

- Make sure you have [MetaMask](https://metamask.io/) and some Sepolia testnet ETH.
- Deploy the smart contract using Hardhat or Truffle.

```bash
# Example using Hardhat
npx hardhat run scripts/deploy.js --network sepolia
```

- Note the **deployed contract address** and **ABI**.

### 4. Configure `.env`

```env
# backend/.env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/supplyChain
CONTRACT_ADDRESS=0xac7688b679634a62e928dcb7d9438a739d1f8ecb
INFURA_PROJECT_ID=your_infura_id
```

### 5. Run the App

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd ../frontend
npm start
```

Visit `http://localhost:3000` to open the app.

---

## 🧠 Smart Contract Overview

```solidity
function addProduct(string memory _name, string memory _origin, string memory _destination) public;
function updateProduct(uint _productId, string memory _status, string memory _location) public;
function getProduct(uint _productId) public view returns (...);
```

Deployed on Sepolia:  
**Contract Address**: `0xac7688b679634a62e928dcb7d9438a739d1f8ecb`

---

## 📌 Future Enhancements

- ✅ QR code for product lookup
- 📱 Mobile version using React Native or Flutter
- 📦 Add IPFS support for storing documents/images
- 📊 Blockchain explorer integration for audit trails

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss your ideas.

---

## 📄 License

[MIT License](LICENSE)

---

## 🙋‍♂️ Author

**Sivasankaran Raja**  
📧 [Reach out on LinkedIn](https://www.linkedin.com/in/sivasankaranraja)

---
