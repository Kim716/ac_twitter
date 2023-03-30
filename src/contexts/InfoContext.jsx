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
  const adminToken = localStorage.getItem("adminToken");

  const handleInfoEditClick = () => {
    setIsInfoModalShow(!isInfoModalShow);
  };

  // useEffect
  // !!! 驗證登入的邏輯應該可以再優化，目前寫法可能會有使用者一直沒登出，但 token 效期過了的後患
  useEffect(() => {
    console.log("驗證登入 useEffect");
    const whichPage = location.pathname.split("/")[1];
    const loginAlert = () => {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "請先登入",
        timer: 1500,
        showConfirmButton: false,
        customClass: {
          icon: "swalIcon right",
          title: "swalTitle",
        },
      });
    };

    // 前台在註冊、登入頁不需要驗證有沒有登入
    if (
      !(
        whichPage === "login" ||
        whichPage === "register" ||
        whichPage === "admin"
      )
    ) {
      // localStorage 沒有這兩項代表沒有登入導引回「前台登入頁」
      if (!(token && loginUserId)) {
        loginAlert();
        navigate("/login");
        return;
      }
    }

    if (whichPage === "admin" && location.pathname.split("/").length > 2) {
      // 後台沒有登入就想看後台也回到「後台登入頁」
      if (!adminToken) {
        loginAlert();
        navigate("/admin");
        return;
      }
    }
  }, [adminToken, location.pathname, loginUserId, navigate, token]);

  useEffect(() => {
    // 有進入 UserPages 系列，並且抓到 id 才打資料
    if (isUserPages && pageUserId) {
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
  }, [isUserPages, navigate, pageUserId]);

  useEffect(() => {
    // 是登入狀態就先打使用者資料
    if (loginUserId && token) {
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
  }, []);

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
