import { getUserInfo } from "api/userAuth";
import { createContext, useEffect, useState } from "react";

export const InfoContext = createContext("");

export function InfoContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isInfoModalShow, setIsInfoModalShow] = useState(false);

  const userId = localStorage.getItem("userId");

  const handleInfoEditClick = () => {
    setIsInfoModalShow(!isInfoModalShow);
  };

  // useEffect
  useEffect(() => {
    // 有登入在抓資料
    if (userId) {
      const getUserInfoAsync = async () => {
        try {
          const userInfoData = await getUserInfo(userId);
          setUserInfo(userInfoData);
        } catch (error) {
          console.error(error);
        }
      };

      getUserInfoAsync();
    }
  }, [userId]);

  return (
    <InfoContext.Provider
      value={{ isInfoModalShow, handleInfoEditClick, userInfo }}
    >
      {children}
    </InfoContext.Provider>
  );
}
