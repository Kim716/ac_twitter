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
    width: 100%;
    height: 200px;

    object-fit: cover;
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
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 4px solid var(--white);
    left: 5%;
    top: 60%;

    object-fit: cover;
  }

  // 編輯頭像的icon
  & .avatar-item {
    position: absolute;
    top: 90%;
    left: 14%;
  }
`;

const StyledEditText = styled.div`
  position: relative;
  width: 100%;
  margin-top: 60px;
  padding: 15px 20px;

  input.input-text {
    margin: 0;
  }

  span {
    margin: 5px;
    color: var(--secondary);
  }
`;

const StyledInputDiv = styled.div`
  position: relative;
  height: 100px;
  background-color: var(--grey2);
  border-bottom: 2px solid #657786;
  padding-left: 10px;
  border-radius: 2px;

  &:hover,
  &:has(input:focus) {
    border-bottom: 2px solid var(--light-blue);
  }

  /* error 時要在 input 加 error 的 className*/
  &:has(input.error) {
    border-bottom: 2px solid var(--error);
  }

  &:has(input.error)::after {
    position: absolute;
    bottom: -20px;

    content: attr(data-content);
    color: var(--error);
    font-size: 12px;
  }
`;

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  padding: 5px 0 0;
  font-size: 14px;
  color: var(--grey7);
`;

const StyleInput = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 0;
  padding: 5px 0;

  font-size: 16px;
  text-align: left;
  vertical-align: top;

  &:focus {
    outline: none;
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
          <img className="cover" src={coverSrc} alt="" />
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
          <img className="avatar" src={avatarSrc} alt="" />
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

          {/* <span className="error">字數超過上限</span> */}
          <span className="gray d-flex justify-content-end">0/50</span>

          <StyledInputDiv>
            <StyledLabel>自我介紹</StyledLabel>
            <StyleInput
              className="input-text"
              id="user_introduce"
              label="自我介紹"
              type="text"
              maxLength="160"
            />
          </StyledInputDiv>
          <p className="d-flex justify-content-end">
            {/* <span className="error">字數超過上限</span> */}
            <span className="gray">0/160</span>
          </p>
        </StyledEditText>
      </form>
    </StyledDiv>
  );
}

export default InfoModal;
