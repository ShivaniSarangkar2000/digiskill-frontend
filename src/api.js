import axios from "axios";

export const getWorkshopData = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/workshop");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch workshop data");
  }
};

export const registerUser = async (name, email) => {
  try {
    const res = await axios.post("http://localhost:8080/api/register", { name, email });
    return res.data;
  } catch (error) {
    return { status: "error", message: "Registration failed. Try again later." };
  }
};
