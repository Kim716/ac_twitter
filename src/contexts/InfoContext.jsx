import { getUserInfo } from "api/userAuth";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const InfoContext = createContext("");

export function InfoContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isInfoModalShow, setIsInfoModalShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const pageUserId = Number(location.pathname.split("/")[2]);

  const handleInfoEditClick = () => {
    setIsInfoModalShow(!isInfoModalShow);
  };

  // useEffect
  useEffect(() => {
    // 有id才抓資料
    if (pageUserId) {
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

          setUserInfo(userInfoData);
        } catch (error) {
          console.error(error);
        }
      };

      getUserInfoAsync();
    }
  }, [pageUserId, navigate]);

  return (
    <InfoContext.Provider
      value={{ isInfoModalShow, handleInfoEditClick, userInfo, setUserInfo }}
    >
      {children}
    </InfoContext.Provider>
  );
}
