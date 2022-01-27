 import sdk from "./1-initialize-sdk.js";

 // In order to deploy the new contract we need our old friend the app module again.
 const app = sdk.getAppModule("0xADA3e9F8bC1C5d75ad76144483892172a8642B30");

 (async () => {
   try {
     // Deploy a standard ERC-20 contract.
     const tokenModule = await app.deployTokenModule({
       // What's your token's name? Ex. "Ethereum"
       name: "OnlyGodCanJudgeUsDAO Governance Token",
       // What's your token's symbol? Ex. "ETH"
       symbol: "SAUCE",
     });
     console.log(
       "✅ Successfully deployed token module, address:",
       tokenModule.address
     );
   } catch (error) {
     console.error("failed to deploy token module", error);
   }
 })();