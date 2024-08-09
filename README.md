# Voting Contract

This repository contains a Solidity smart contract that allows users to vote for candidates. The contract keeps track of votes and ensures that only valid candidates can receive votes. It also includes a comprehensive suite of tests written in JavaScript using Hardhat.

## Features

- Initialize the contract with a list of candidates.
- Vote for a candidate, with validation to ensure the candidate exists.
- Retrieve the total votes for a specific candidate.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- Hardhat

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Lucas-Lantimant/solidity-voting-contract.git
   cd voting-contract
#### Install dependencies:
Ensure that your `package.json` includes the following dependencies:

- `@nomicfoundation/hardhat-toolbox`
- `@nomicfoundation/hardhat-chai-matchers`
- `chai`
- `ethers`

This will install all the necessary dependencies listed in the `package.json` file.

To install these dependencies, run:

```bash
npm install
```

### Compile the smart contracts:
```bash
npx hardhat compile
```
### Running Tests
To run the tests, use the following command:

```bash
npx hardhat test
```

### Example Test Code
#### Here is a brief example of how the tests are structured:

```javascript
describe("Voting", function () {
  it("Should initialize with the correct candidates", async function () {
    // Test logic here...
  });

  it("Should revert when voting for an invalid candidate", async function () {
    // Test logic here...
  });
});
```
For the full test suite, see the test directory.

## Contract Details

### Solidity Code

The `Voting` contract is written in Solidity and includes the following key functions:

- `constructor(string[] memory candidateNames)`: Initializes the contract with a list of candidates.
- `totalVotesFor(string memory candidate) public view returns(uint256)`: Returns the total votes for a candidate.
- `voteForCandidate(string memory candidate) public`: Increments the vote count for a valid candidate.
- `validCandidate(string memory candidate) public view returns(bool)`: Checks if a candidate is valid.

Ignition Deployment
The contract can be deployed using Hardhat Ignition. Example deployment script is included in the repository.

License
This project is licensed under the `MIT License` - see the LICENSE file for details.