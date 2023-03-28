import axios from "axios";

const baseUrl = "https://serene-wildwood-20959.herokuapp.com/api/tweets";

const axiosInstance = axios.create({
  baseUrl: baseUrl,
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

export const getTopUsers = async () => {
  try {
    // 發出Get Top Users 請求
    const res = await axiosInstance.get(`${baseUrl}/topUsers`);
    return res.data;
  } catch (error) {
    console.error(
      "[ ⚠️⚠️⚠️ Get Top Users Failed ]:",
      error.response.data.message
    );

    return error.response.data;
  }
};

export const getAllTweets = async () => {
  try {
    // 發送新增推文的請求
    const res = await axiosInstance.get(baseUrl);

    return res.data;
  } catch (error) {
    console.error("[ ⚠️⚠️⚠️ Get Tweets Failed ]:", error.response.data.message);

    return error.response.data;
  }
};

export const postTweet = async ({ description }) => {
  try {
    // 發送新增推文的請求
    const res = await axiosInstance.post(baseUrl, { description });

    return res.data;
  } catch (error) {
    console.error("[ ⚠️⚠️⚠️ Post Tweet Failed ]:", error.response.data.message);

    return error.response.data;
  }
};

export const getSingleTweet = async (tweetId) => {
  try {
    // 發送新增推文的請求
    const res = await axiosInstance.get(`${baseUrl}/${tweetId}`);

    return res.data;
  } catch (error) {
    console.error(
      "[ ⚠️⚠️⚠️ Get Single Tweet Failed ]:",
      error.response.data.message
    );

    return error.response.data;
  }
};
