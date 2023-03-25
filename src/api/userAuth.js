import axios from "axios";

const baseUrl = "https://serene-wildwood-20959.herokuapp.com/api/users";

export const login = async ({ account, password }) => {
  try {
    // 發出登入請求
    const res = await axios.post(`${baseUrl}/login`, { account, password });

    return res.data;
  } catch (error) {
    console.error("[ ⚠️⚠️⚠️ Login Failed ]:", error.response.data.message);

    return error.response.data;
  }
};

export const register = async ({
  account,
  name,
  email,
  password,
  checkPassword,
}) => {
  try {
    // 發送註冊請求
    const res = await axios.post(baseUrl, {
      account,
      name,
      email,
      password,
      checkPassword,
    });

    return res.data;
  } catch (error) {
    console.error("[ ⚠️⚠️⚠️ Register Failed ]:", error.response.data.message);

    return error.response.data;
  }
};
