import { getUserInfo } from "api/userAuth";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const InfoContext = createContext("");

export function InfoContextProvider({ children }) {
  const [loginUserInfo, setLoginUserInfo] = useState({});
  const [pageUserInfo, setPageUserInfo] = useState({});
  const [isInfoModalShow, setIsInfoModalShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isUserPages = location.pathname.split("/")[1] === "user";
  const pageUserId = Number(location.pathname.split("/")[2]);
  const loginUserId = Number(localStorage.getItem("userId"));
  const token = localStorage.getItem("token");

  const handleInfoEditClick = () => {
    setIsInfoModalShow(!isInfoModalShow);
  };

  // useEffect
  useEffect(() => {
    // 有進入 UserPages 系列，並且抓到 id 才打資料
    if (isUserPages && pageUserId) {
      console.log("進入使用者系列");
      const getUserInfoAsync = async () => {
        try {
          const userInfoData = await getUserInfo(pageUserId);

          // 如果為 error 就會跳通知轉到首頁
          if (userInfoData.status === "error") {
            // 跳通知
            Swal.fire({
              position: "top",
              icon: "error",
              title: userInfoData.message,
              timer: 1500,
              showConfirmButton: false,
              customClass: {
                icon: "swalIcon right",
                title: "swalTitle",
              },
            });

            navigate("/main");
            return;
          }

          setPageUserInfo(userInfoData);
        } catch (error) {
          console.error(error);
        }
      };

      getUserInfoAsync();
    }
  }, [isUserPages, pageUserId, navigate]);

  useEffect(() => {
    // 是登入狀態就先打使用者資料
    if (loginUserId && token) {
      console.log("你有登入喔");
      const getUserInfoAsync = async () => {
        try {
          const userInfoData = await getUserInfo(loginUserId);

          //  預防 token 效期過了，或是資料庫重整 id 消失
          if (userInfoData.message === "請先登入") {
            navigate("/login");
            return;
          }

          setLoginUserInfo(userInfoData);
        } catch (error) {
          console.error(error);
        }
      };

      getUserInfoAsync();
    }
    //eslint-disable-next-line
  }, [loginUserId, token]);

  return (
    <InfoContext.Provider
      value={{
        isInfoModalShow,
        handleInfoEditClick,
        pageUserInfo,
        setPageUserInfo,
        loginUserInfo,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}
