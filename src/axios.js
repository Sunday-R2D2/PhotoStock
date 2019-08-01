import axios from "axios";

const instance = axios.create({
  baseURL: "https://photostock-76ec7.firebaseio.com"
});

export default instance;
