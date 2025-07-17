// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        string name;
        string origin;
        string destination;
        string currentLocation;
        string status;
        string blockchainHash;
        uint256 timestamp;
    }

    mapping(uint256 => Product) public products;
    uint256 public productCount;

    event ProductAdded(
        uint256 productId,
        string name,
        string status,
        string blockchainHash
    );

    function addProduct(
        string memory name,
        string memory origin,
        string memory destination,
        string memory currentLocation,
        string memory status,
        string memory blockchainHash
    ) public {
        products[productCount] = Product(
            name,
            origin,
            destination,
            currentLocation,
            status,
            blockchainHash,
            block.timestamp
        );
        emit ProductAdded(productCount, name, status, blockchainHash);
        productCount++;
    }

    function updateProduct(
        uint256 productId,
        string memory currentLocation,
        string memory status
    ) public {
        require(productId < productCount, "Invalid product ID");
        Product storage p = products[productId];
        p.currentLocation = currentLocation;
        p.status = status;
        p.timestamp = block.timestamp;
    }

    function getProduct(uint256 productId)
        public
        view
        returns (
            string memory name,
            string memory origin,
            string memory destination,
            string memory currentLocation,
            string memory status,
            string memory blockchainHash,
            uint256 timestamp
        )
    {
        Product memory p = products[productId];
        return (
            p.name,
            p.origin,
            p.destination,
            p.currentLocation,
            p.status,
            p.blockchainHash,
            p.timestamp
        );
    }
}
