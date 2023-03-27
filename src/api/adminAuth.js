import axios from "axios";

const baseUrl = "https://serene-wildwood-20959.herokuapp.com/api/admin";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// 發送請求前都要做一個在 header 放 authToken 的動作
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);
  }
);

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

export const getAdminTweets = async () => {
  try {
    // 發出登入請求
    const res = await axiosInstance.get(`${baseUrl}/tweets`);

    return res.data;
  } catch (error) {
    console.error("[ ⚠️⚠️⚠️ Get Tweets Failed ]:", error.response.data.message);

    return error.response.data;
  }
};
