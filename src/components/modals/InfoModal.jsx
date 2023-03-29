import { useState, useContext } from "react";
import styled from "styled-components";
import { InfoContext } from "contexts/InfoContext";
import Swal from "sweetalert2";

// Components
import ActButton from "components/ActButton";
import Input from "components/Input";
import { ReactComponent as AddImg } from "assets/icons/addimg_unfocus.svg";
import { ReactComponent as CrossWhite } from "assets/icons/cross_white.svg";
import { ReactComponent as CrossFocus } from "assets/icons/cross_focus.svg";

const StyledDiv = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 20px;
  background-color: var(--white);

  // header的CSS設定
  .cross-box {
    padding: 15px 20px;

    .cross-icon {
      margin-right: 30px;
      padding: 0;
      width: 25px;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        path {
          fill: var(--grey9);
        }
      }
    }

    h1 {
      font-weight: 700;
      font-size: 18px;
    }

    button {
      width: 80px;
      padding: 10px 0;
      font-size: 16px;
    }
  }
`;

const StyledEditImg = styled.div`
  position: relative;

  svg {
    cursor: pointer;
  }

  .input-file {
    display: none;
  }

  .cover {
    position: relative;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 200px;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }

    // 編輯背景的icon
    .edit-img-item {
      position: absolute;
      z-index: 4;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      svg {
        margin: 20px;

        &:hover {
          path {
            fill: var(--grey9);
          }
        }
      }
    }
  }

  .avatar {
    background-color: var(--success);
    width: 140px;
    height: 140px;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    left: 5%;
    top: 60%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 3;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      border: 5px solid var(--white);
      border-radius: 50%;

      background-color: rgba(0, 0, 0, 0.3);
    }

    // 編輯頭像的icon
    .avatar-item {
      position: absolute;
      z-index: 4;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &:hover {
        path {
          fill: var(--grey9);
        }
      }
    }
  }
`;

const StyledEditText = styled.div`
  position: relative;
  width: 100%;
  margin-top: 60px;
  padding: 15px 20px;

  div {
    margin: 0;
  }

  span {
    margin: 5px;
    color: var(--secondary);
  }
`;

function InfoModal() {
  const { handleInfoEditClick, userInfo } = useContext(InfoContext);

  const [cover, setCover] = useState(userInfo.cover);
  const [avatar, setAvatar] = useState(userInfo.avatar);
  const [name, setName] = useState(userInfo.name);
  const [introduction, setIntroduction] = useState(userInfo.introduction);

  const handleChangeImg = (event) => {
    const fileMaxSize = 1024 * 1024 * 20; // 20MB
    const file = event.target.files[0];

    // 超過檔案大小就先擋
    if (file?.size > fileMaxSize) {
      // 跳通知
      Swal.fire({
        icon: "error",
        text: "檔案超過 20MB",
      });

      return;
    }

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        if (event.target.name === "cover") {
          setCover(reader.result);
        }
        if (event.target.name === "avatar") {
          setAvatar(reader.result);
        }
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImg = () => {
    setCover(userInfo.cover);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value);
  };

  return (
    <StyledDiv>
      <header className="cross-box d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <button className="cross-icon">
            <CrossFocus onClick={handleInfoEditClick} />
          </button>
          <h1>編輯個人資料</h1>
        </div>
        <ActButton buttonName={"儲存"} />
      </header>

      {/* 圖片區 */}
      <StyledEditImg>
        <div className="cover">
          <img src={cover} alt="cover" />
          <div className="edit-img-item">
            <label htmlFor="addCover">
              <AddImg />
              <input
                className="input-file"
                id="addCover"
                name="cover"
                type="file"
                accept="image/.png, .jpg, .jpeg"
                onChange={handleChangeImg}
              />
            </label>
            <label onClick={handleDeleteImg}>
              <CrossWhite />
            </label>
          </div>
        </div>

        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <div className="avatar-item">
            <label htmlFor="addAvatar">
              <AddImg />
              <input
                className="input-file"
                id="addAvatar"
                name="avatar"
                type="file"
                accept="image/.png, .jpg, .jpeg"
                onChange={handleChangeImg}
              />
            </label>
          </div>
        </div>
      </StyledEditImg>

      {/* 文字區 */}
      <StyledEditText>
        <Input
          className="input-text"
          id="user_name"
          label="名稱"
          type="text"
          maxLength="50"
          value={name}
          onChange={handleNameChange}
        />
        <span className="gray d-flex justify-content-end">0/50</span>
        <Input
          className="input-text"
          id="user_introduce"
          label="自我介紹"
          type="text"
          maxLength="160"
          value={introduction}
          onChange={handleIntroductionChange}
          isTextarea={true}
        />
        <span className="gray d-flex justify-content-end">0/160</span>
      </StyledEditText>
    </StyledDiv>
  );
}

export default InfoModal;
