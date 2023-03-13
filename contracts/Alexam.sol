// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract Alexam{

    function callthatEvent(address contractAdd)public{
        (bool suss,)=contractAdd.call(abi.encodeWithSignature("attempt()"));
        require(suss);

    }
}