const { default: axios } = require("axios");

const isServer = typeof window == "undefined";

const token = !isServer && localStorage.getItem("token");
const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});

export default api;
