import { useState } from "react";
import styled from "styled-components";
import ActButton from "components/ActButton";
import Input from "components/Input";
import Cover from "assets/images/cover.png";
import Avatar from "assets/images/avatar.png";
import { ReactComponent as Addimg } from "assets/icons/addimg_unfocus.svg";
import { ReactComponent as CrossWhite } from "assets/icons/cross_white.svg";
import { ReactComponent as CrossFocus } from "assets/icons/cross_focus.svg";

const StyledDiv = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 20px;
  background-color: var(--white);

  // header的CSS設定
  & .cross-box {
    padding: 15px 20px;

    & .cross-icon {
      margin-right: 30px;
      padding: 0;
      width: 25px;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
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

  & .input-file {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  & .cover {
    position: relative;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  & .cover::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  // 編輯背景的icon
  & .edit-img-item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
      margin: 20px;
    }
  }

  & .avatar {
    img {
      width: 140px;
      height: 140px;
      position: absolute;
      z-index: 2;
      border-radius: 50%;
      left: 5%;
      top: 60%;
      object-fit: cover;
    }
  }

  & .avatar::after {
    content: " ";
    position: absolute;
    z-index: 3;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 5px solid var(--white);
    left: 5%;
    top: 60%;
    transform: translate(-3%, -3%);
    background-color: rgba(0, 0, 0, 0.5);
  }

  // 編輯頭像的icon
  & .avatar-item {
    position: absolute;
    z-index: 4;
    top: 90%;
    left: 14%;
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
  const [coverSrc, setCoverSrc] = useState(Cover);
  const [avatarSrc, setAvatarSrc] = useState(Avatar);

  const handleChengeImg = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        if (event.target.name === "cover") {
          setCoverSrc(reader.result);
        }
        if (event.target.name === "avatar") {
          setAvatarSrc(reader.result);
        }
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImg = () => {
    setCoverSrc(Cover);
  };

  return (
    <StyledDiv>
      <header className="cross-box d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <button className="cross-icon">
            <CrossFocus />
          </button>
          <h1>編輯個人資料</h1>
        </div>
        <ActButton buttonName={"儲存"} />
      </header>

      <form className="user-container" action="">
        {/* 圖片區 */}
        <StyledEditImg>
          <div className="cover">
            <img className="cover" src={coverSrc} alt="" />
          </div>
          <div className="edit-img-item">
            <label htmlFor="addCover">
              <Addimg />
              <input
                className="input-file"
                id="addCover"
                name="cover"
                type="file"
                accept="image/.png, .jpg, .jpeg"
                onChange={handleChengeImg}
              />
            </label>
            <label onClick={handleDeleteImg}>
              <CrossWhite />
            </label>
          </div>
          <div className="avatar">
            <img src={avatarSrc} alt="" />
          </div>
          <div className="avatar-item">
            <label htmlFor="addAvatar">
              <Addimg />
              <input
                className="input-file"
                id="addAvatar"
                name="avatar"
                type="file"
                accept="image/.png, .jpg, .jpeg"
                onChange={handleChengeImg}
              />
            </label>
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
          />
          <span className="gray d-flex justify-content-end">0/50</span>
          <Input
            className="input-text"
            id="user_introduce"
            label="自我介紹"
            type="text"
            maxLength="160"
          />
          <span className="gray d-flex justify-content-end">0/160</span>
        </StyledEditText>
      </form>
    </StyledDiv>
  );
}

export default InfoModal;
