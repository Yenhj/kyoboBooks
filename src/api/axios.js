import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.0.111:9988/api"
});
export default instance;
