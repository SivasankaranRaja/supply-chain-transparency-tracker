# 🛠️ Supply Chain Transparency Tracker

A blockchain-based supply chain management system that ensures product authenticity and transparency using Ethereum smart contracts, IPFS, and the MERN stack.

## 🚀 Features

- 🔐 **Blockchain Integration (Ethereum)** – Ensures tamper-proof product records.
- 🌐 **Frontend (React.js)** – User-friendly interface to track and manage products.
- 📦 **Backend (Node.js + Express + MongoDB)** – Stores non-sensitive product metadata.
- 📡 **Smart Contract (Solidity)** – Immutable ledger for product lifecycle.
- 📁 **IPFS (Planned)** – Decentralized file storage for documents or media.

---

## 🧱 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React.js                            |
| Backend    | Node.js, Express.js, MongoDB        |
| Blockchain | Ethereum (Solidity, Web3.js)        |
| Storage    | IPFS (InterPlanetary File System)   |
| Wallet     | MetaMask                            |
| Tools      | Hardhat / Remix, Ganache, Infura    |

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SivasankaranRaja/supply-chain-transparency-tracker.git
cd supply-chain-transparency-tracker
2. Install Backend Dependencies
bash
Copy
Edit
cd supply-chain-backend
npm install
3. Install Frontend Dependencies
bash
Copy
Edit
cd ../supply-chain-frontend
npm install
📜 Smart Contract Deployment
You can use Remix, Hardhat, or Truffle to deploy the smart contract:

Navigate to contracts/SupplyChain.sol

Deploy to Sepolia or other testnet.

After deployment, copy the contract address and ABI.

Update the values in:

bash
Copy
Edit
supply-chain-frontend/src/blockchain/contract.js
Example:

javascript
Copy
Edit
export const contractAddress = "0xac7688b679634a62e928dcb7d9438a739d1f8ecb";
export const contractABI = [ /* ...ABI here... */ ];
📦 Environment Variables
Create a .env file in the backend folder:

bash
Copy
Edit
supply-chain-backend/.env
Add the following:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
🧪 Run Locally
Start Backend Server
bash
Copy
Edit
cd supply-chain-backend
npm start
Start Frontend App
bash
Copy
Edit
cd ../supply-chain-frontend
npm start
Visit: http://localhost:3000

📸 Screenshots
Add screenshots of UI displaying:

Product List

Product Detail View

Blockchain Hash Display

Update Status Page

📂 Project Structure
pgsql
Copy
Edit
supply-chain-transparency-tracker/
├── contracts/
│   └── SupplyChain.sol
├── supply-chain-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── supply-chain-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── blockchain/
│   │   └── App.js
│   └── public/
🧠 Future Enhancements
📸 IPFS integration for storing certificates/media files

🔁 QR code scanning and tracking from mobile

🔐 Role-based access control (Manufacturer, Distributor, Retailer, Consumer)

📊 Dashboard with analytics

📱 Mobile-responsive or Flutter-based version

🙌 Author
Developed by Sivasankaran Raja

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

yaml
Copy
Edit

---

Let me know if you want this saved as a downloadable file or need a Hindi/Tamil version for local submission or presentation.








Ask ChatGPT



Tools



Chat
