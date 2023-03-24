import axios from "axios";

const baseUrl = "https://serene-wildwood-20959.herokuapp.com/api/admin";

export const adminLogin = async ({ account, password }) => {
  try {
    // 發出登入請求
    const res = await axios.post(`${baseUrl}/login`, { account, password });

    return res.data;
  } catch (error) {
    console.error("[ ⚠️⚠️⚠️ Login Failed ]:", error.response.data.message);

    return error.response.data;
  }
};
