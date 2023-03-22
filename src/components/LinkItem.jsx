import styled from "styled-components";
import { ReactComponent as HomeUnfocus } from "assets/icons/home_unfocus.svg";
import { ReactComponent as HomeFocus } from "assets/icons/home_focus.svg";
import { ReactComponent as SetUnfocus } from "assets/icons/set_unfocus.svg";
import { ReactComponent as SetFocus } from "assets/icons/set_focus.svg";
import { ReactComponent as UserUnfocus } from "assets/icons/user_unfocus.svg";
import { ReactComponent as UserFocus } from "assets/icons/user_focus.svg";
import { ReactComponent as LogoutUnfocus } from "assets/icons/logout_unfocus.svg";
import { ReactComponent as LogoutFocus } from "assets/icons/logout_focus.svg";
import { useState } from "react";

const StyledIcon = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.isClick ? "default" : "pointer")};

  & svg {
    width: 24px;
    height: 24px;
    margin-right: 19px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 58px;
    padding-top: 5px;
    color: ${(props) =>
      props.isClick ? "var(--brand-color)" : "var(--grey9)"};
  }
`;

// 接上換頁功能後，要思考按鈕一個亮，其他的不亮

function LinkItem({ title }) {
  const [isClick, setIsClick] = useState(false);

  const handleIsClick = () => {
    setIsClick(!isClick);
  };

  return (
    <StyledIcon isClick={isClick} onClick={handleIsClick}>
      {(title === "首頁" || title === "推文清單") &&
        (isClick ? <HomeFocus /> : <HomeUnfocus />)}

      {(title === "個人資料" || title === "使用者列表") &&
        (isClick ? <UserFocus /> : <UserUnfocus />)}

      {title === "設定" && (isClick ? <SetFocus /> : <SetUnfocus />)}
      {title === "登出" && (isClick ? <LogoutFocus /> : <LogoutUnfocus />)}
      <span>{title}</span>
    </StyledIcon>
  );
}

export default LinkItem;
