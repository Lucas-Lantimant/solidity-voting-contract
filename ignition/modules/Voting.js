const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VotingModule", (m) => {
  const candidateNames = m.getParameter("candidateNames", ["Alice", "Bob", "Charlie"]);

  const voting = m.contract("Voting", [candidateNames]);

  return { voting };
});

