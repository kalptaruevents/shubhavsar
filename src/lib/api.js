import axios from "axios"

// Replace with your Render backend URL after deployment
const API = axios.create({
  baseURL: "https://shubhavsar.onrender.com"
})

export default API
