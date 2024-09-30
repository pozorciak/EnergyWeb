import axios from "axios";

const instance = axios.create({
  baseURL: "http://solvingenergy.online:5000/api",
});

export default instance;

