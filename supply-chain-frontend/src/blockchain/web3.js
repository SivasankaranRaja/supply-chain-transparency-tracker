import Web3 from "web3";

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  await window.ethereum.enable(); // Ask user to connect wallet
} else {
  alert("MetaMask not detected. Install it!");
}

export default web3;
