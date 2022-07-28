import axios from "axios";
import { encode } from "base-64";

// This should be in a .env file,
// but since I have to share the repo, I put the credentials here
const username = "user3472";
const apiKey = "0f6aa487-0f3b-41dc-95be-86c19dd0b98d";

export const SauceClient = axios.create({
  baseURL: "https://size-calculator-api.sspinc.io/",
  headers: {
    Authorization: "Basic " + encode(`${username}:${apiKey}`),
  },
  withCredentials: true,
});
