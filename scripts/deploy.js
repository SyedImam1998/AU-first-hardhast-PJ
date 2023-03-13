

async function main() {


  const Al = await hre.ethers.getContractFactory("Alexam");
  const al = await Al.deploy();

  await al.deployed();

  console.log( `counter deployed to:${al.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
