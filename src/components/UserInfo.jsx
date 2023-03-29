import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "api/userAuth";
import Swal from "sweetalert2";
import styled from "styled-components";

// Components
import { ReactComponent as EmailIcon } from "assets/icons/mail_unfocus.svg";
import { ReactComponent as NotiFocus } from "assets/icons/noti_focus.svg";
import { ReactComponent as NotiUnfocus } from "assets/icons/noti_unfocus.svg";
import ActButton from "./ActButton";
import ModalContainer from "./containers/ModalContainer";
import StatusButton from "./StatusButton";

const StyledDiv = styled.div`
  .image-box {
    position: relative;

    & .cover {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    & .avatar {
      width: 120px;
      height: 120px;
      position: absolute;
      left: 5%;
      top: 40%;

      border-radius: 50%;
      border: 5px solid var(--white);
      object-fit: cover;
    }
  }

  .text-box {
    margin: 0 30px;

    p,
    h1,
    div {
      margin: 5px 0;
    }

    & h1 {
      font-weight: 700;
      font-size: 18px;
    }

    & .grey {
      color: var(--secondary);
      font-size: 14px;
    }

    & p {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.5;
    }

    & .follow-box {
      span {
        font-weight: bold;
        cursor: pointer;
      }

      p {
        margin-right: 20px;
      }
    }
  }
`;

const StyledIcon = styled.div`
  margin: 20px 20px 20px auto;
  svg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const StyledActButton = styled.div`
  width: 130px;
  height: 40px;
  margin: 20px 20px 20px auto;

  button {
    width: 130px;
    height: 40px;
    padding: 0;
    background: var(--white);
    color: var(--brand-color);
    line-height: 40px;
    font-size: 16px;
  }
`;

function EditInfoButton({ onClick }) {
  return (
    <StyledActButton>
      <ActButton buttonName="編輯個人資料" onClick={onClick} />
    </StyledActButton>
  );
}

function OtherInfoButton() {
  const [isNoti, setIsNoto] = useState(false);

  const handleNotiChange = () => {
    setIsNoto(!isNoti);
  };

  return (
    <StyledIcon className="d-flex justify-content-end">
      <EmailIcon />
      <div onClick={handleNotiChange}>
        {isNoti ? <NotiUnfocus /> : <NotiFocus />}
      </div>
      {/* 還未串資料進來，先把isFollowed擺在這，串API時一併更新 */}
      <StatusButton isFollowed={true} />
    </StyledIcon>
  );
}

function UserInfo({ pageUserId }) {
  const [userInfo, setUserInfo] = useState({});
  const [isInfoModal, setIsInfoModal] = useState(false);

  const userId = Number(localStorage.getItem("userId"));

  const navigate = useNavigate();

  const handleInfoModalClick = () => {
    setIsInfoModal(!isInfoModal);
  };

  useEffect(() => {
    const getUserInfoAsync = async () => {
      try {
        const data = await getUserInfo(pageUserId);

        // 如果為 error 就會跳通知轉到首頁
        if (data.status === "error") {
          // 跳通知
          Swal.fire({
            position: "top",
            icon: "error",
            title: data.message,
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

        setUserInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserInfoAsync();
  }, [pageUserId, navigate]);

  return (
    <StyledDiv>
      {isInfoModal && <ModalContainer value="編輯個人資料" />}
      <div className="image-box d-flex flex-column">
        <img className="cover" src={userInfo.cover} alt="" />
        <img className="avatar" src={userInfo.avatar} alt="" />
        {pageUserId === userId ? (
          <EditInfoButton onClick={handleInfoModalClick} />
        ) : (
          <OtherInfoButton />
        )}
      </div>
      <div className="text-box">
        <h1>{userInfo.name}</h1>
        <span className="grey">@{userInfo.account}</span>
        <p>{userInfo.introduction}</p>
        <div className="follow-box d-flex">
          <p>
            <span onClick={() => navigate(`/user/${userId}/following`)}>
              {userInfo.followingCount} 個
            </span>
            <span className="grey">跟隨中</span>
          </p>
          <p>
            <span onClick={() => navigate(`/user/${userId}/followers`)}>
              {userInfo.followerCount} 位
            </span>
            <span className="grey">跟隨者</span>
          </p>
        </div>
      </div>
    </StyledDiv>
  );
}

export default UserInfo;