import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xB5a0F5189C3A7977336903BA8b569B9A9aCd44fc"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Party Hat",
        description: "This NFT will give you access to OnlyGodCanJudgeUsDAO!",
        image: readFileSync("scripts/assets/hat.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
