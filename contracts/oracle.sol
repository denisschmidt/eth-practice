// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./eth-price.sol";
import "./ownable";

contract Oracle is Ownable {
    EthPriceOracleInterface private oracleInstance;
    address private oracleAddress;
    mapping(uint256 => bool) myRequests;
    event newOracleAddressEvent(address oracleAddress);
    event ReceivedNewRequestIdEvent(uint256 id);

    function setOracleInstanceAddress(address _oracleInstanceAddress)
        public
        onlyOwner
    {
        oracleAddress = _oracleInstanceAddress;
        oracleInstance = EthPriceOracleInterface(oracleAddress);
        emit newOracleAddressEvent(oracleAddress);
    }

    function updateEthPrice() public {
        uint256 id = oracleInstance.getLatestEthPrice();
        myRequests[id] = true;
        emit ReceivedNewRequestIdEvent(id);
    }
}
