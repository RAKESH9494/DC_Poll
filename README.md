#Summary 

This is a decentralized platform for voting in contests. The Owner of the smart contract posts the contestants' details, including their name, address, and voting symbol. Users on the network can vote for each contestant once using Metamask. EtherJS is used for interaction between the frontend and the smart contract.ReactJS is used for building the frontend, while Solidity is used for writing the smart contract. Hardhat is used for the local blockchain.

# Getting Started
To get started with this project, you'll need to download the repository and set up a local environment.

#Prequisites
Before you can set up a environment, you'll need to have NodeJS installed on your system. You can download it from the official website: https://nodejs.org/en/download

#Running Local Blockchain
Before running dapp you need to run blockchain server by using below command in command prompt.It will show 20 addresses with private key

npx hardhat node

Note:dont close the command prompt.

#Deploying Smart contract

npx hardhat run scripts/finaldeploy.js --network localhost

#Running Application
run the application by using command : npm start

#Components 

HOME : Here user can vote the contesents .

![Screenshot (166)](https://user-images.githubusercontent.com/104605032/235320274-39d061a7-9ec0-4e6c-bdd1-e96986add611.png)

ADMIN : Where the owner of the smart contract can post the details of contestents.

![Screenshot (169)](https://user-images.githubusercontent.com/104605032/235319625-f3296481-eaf2-4c4e-bc8b-3b387a0dcdcf.png)

LIVE : Where everyone can see the live results of the contestents.

![Screenshot (170)](https://user-images.githubusercontent.com/104605032/235319822-fd2a36e3-97c1-4cb8-85c7-e5d4ec2c6d9c.png)

CHANGE : It is used to change the address of the wallet
