
const hre= require('hardhat');
const address="0x6ca6696eB3F3e37a5d01B5aC1322B314f50d7E0C"
async function main() {


    const Al = await hre.ethers.getContractAt("Alexam",address);
    const alo=await Al.callthatEvent("0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502");
    await alo.wait();
    console.log(alo);
  
  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  