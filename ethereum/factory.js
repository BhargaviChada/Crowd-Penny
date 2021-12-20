import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xEd50803B8bAa47D9c8C0f9599FD916c87A357D50"
);

export default instance;
