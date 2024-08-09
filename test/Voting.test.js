const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Voting", function () {
  async function deployVotingFixture() {
    const candidateNames = ["Alice", "Bob", "Charlie"];

    const [owner, voter1, voter2] = await ethers.getSigners();

    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(candidateNames);

    return { voting, candidateNames, owner, voter1, voter2 };
  }

  describe("Deployment", function () {
    it("Should initialize with the correct candidates", async function () {
      const { voting, candidateNames } = await loadFixture(deployVotingFixture);

      for (const candidate of candidateNames) {
        expect(await voting.totalVotesFor(candidate)).to.equal(0);
      }
    });
  });

  describe("Voting", function () {
    it("Should increase the vote count for a valid candidate", async function () {
      const { voting, voter1 } = await loadFixture(deployVotingFixture);

      await voting.connect(voter1).voteForCandidate("Alice");

      expect(await voting.totalVotesFor("Alice")).to.equal(1);
    });

    it("Should revert when voting for an invalid candidate", async function () {
      const { voting, voter1 } = await loadFixture(deployVotingFixture);

      await expect(
        voting.connect(voter1).voteForCandidate("InvalidCandidate")
      ).to.be.revertedWith("Invalid candidate");
    });

    it("Should allow multiple votes for the same candidate", async function () {
      const { voting, voter1, voter2 } = await loadFixture(deployVotingFixture);

      await voting.connect(voter1).voteForCandidate("Alice");
      await voting.connect(voter2).voteForCandidate("Alice");

      expect(await voting.totalVotesFor("Alice")).to.equal(2);
    });
  });

  describe("Validations", function () {
    it("Should correctly validate valid candidates", async function () {
      const { voting } = await loadFixture(deployVotingFixture);

      expect(await voting.validCandidate("Alice")).to.equal(true);
      expect(await voting.validCandidate("InvalidCandidate")).to.equal(false);
    });
  });
});