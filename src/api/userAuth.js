import axios from "axios";

const baseUrl = "https://serene-wildwood-20959.herokuapp.com/api/users";

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

export const getUserInfo = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/${userId}`);

    return res.data;
  } catch (error) {
    console.error(
      "[ ⚠️⚠️⚠️ Get User Info Failed ]:",
      error.response.data.message
    );

    return error.response.data;
  }
};

export const getUserSettingInfo = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/${id}/setting`);

    return res.data;
  } catch (error) {
    console.error(
      "[ ⚠️⚠️⚠️ Get User Setting Info Failed ]:",
      error.response.data.message
    );

    return error.response.data;
  }
};

export const putUserSettingInfo = async ({
  id,
  account,
  name,
  email,
  password,
  checkPassword,
}) => {
  try {
    const res = await axiosInstance.put(`${baseUrl}/${id}/setting`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });

    return res.data;
  } catch (error) {
    console.error(
      "[ ⚠️⚠️⚠️ Put User Setting Info Failed ]:",
      error.response.data.message
    );

    return error.response.data;
  }
};
