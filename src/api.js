import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/workshop"; // your backend URL

export const getWorkshopData = async () => {
  const res = await axios.get(`${API_BASE_URL}`);
  return res.data;
};

export const registerUser = async (name, email) => {
  const res = await axios.post(`${API_BASE_URL}/register`, { name, email });
  return res.data;
};
