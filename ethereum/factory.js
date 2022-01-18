import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xD2AD4976ec76040894D0c26A5751E35B3D952a39"
);

export default instance;
