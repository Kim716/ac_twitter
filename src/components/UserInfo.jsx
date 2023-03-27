import { useState } from "react";
import Cover from "assets/images/cover.png";
import Avatar from "assets/images/avatar.png";
import { ReactComponent as EmailIcon } from "assets/icons/mail_unfocus.svg";
import { ReactComponent as NotiFocus } from "assets/icons/noti_focus.svg";
import { ReactComponent as NotiUnfocus } from "assets/icons/noti_unfocus.svg";
import styled from "styled-components";
import ActButton from "./ActButton";
import ModalContainer from "./containers/ModalContainer";
import StatusButton from "./StatusButton";
import { useNavigate } from "react-router-dom";

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

function EditInfo({ onClick }) {
  return (
    <StyledActButton>
      <ActButton buttonName="編輯個人資料" onClick={onClick} />
    </StyledActButton>
  );
}

function OtherUserInfo() {
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
      <StatusButton defaultName="跟隨" clickName="正在跟隨" />
    </StyledIcon>
  );
}

function UserInfo() {
  const [isInfoModal, setIsInfoModal] = useState(false);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate()

  const handleInfoModalClick = () => {
    setIsInfoModal(!isInfoModal);
  };

  return (
    <StyledDiv>
      {isInfoModal && <ModalContainer value="編輯個人資料" />}
      <div className="image-box d-flex flex-column">
        <img className="cover" src={Cover} alt="" />
        <img className="avatar" src={Avatar} alt="" />
        <EditInfo onClick={handleInfoModalClick} />
        {/* <OtherUserInfo /> */}
      </div>
      <div className="text-box">
        <h1>User Name</h1>
        <span className="grey">@account</span>
        <p>
          The snow glows white on the mountain tonight Not a footprint to be
        </p>
        <div className="follow-box d-flex">
          <p>
            <span onClick={() => navigate(`/user/${userId}/following`)}>
              34 個
            </span>
            <span className="grey">跟隨中</span>
          </p>
          <p>
            <span onClick={() => navigate(`/user/${userId}/followers`)}>
              59 位
            </span>
            <span className="grey">跟隨者</span>
          </p>
        </div>
      </div>
    </StyledDiv>
  );
}

export default UserInfo;
