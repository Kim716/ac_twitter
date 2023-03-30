import { getUserInfo } from "api/userAuth";
import { createContext, useEffect, useState } from "react";

export const TweetContext = createContext("");

export function TweetContextProvider({ children }) {
  const [userAvatar, setUserAvatar] = useState("");
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);

  const userId = localStorage.getItem("userId");

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  // useEffect
  useEffect(() => {
    // 有登入在抓資料
    if (userId) {
      const getUserInfoAsync = async () => {
        try {
          const { avatar } = await getUserInfo(userId);
          setUserAvatar(avatar);
        } catch (error) {
          console.error(error);
        }
      };

      getUserInfoAsync();
    }
  }, [userId]);

  return (
    <TweetContext.Provider
      value={{ isTweetModalShow, handleTweetClick, userAvatar }}
    >
      {children}
    </TweetContext.Provider>
  );
}
