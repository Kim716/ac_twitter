import styled from "styled-components";
import { ReactComponent as HomeUnfocus } from "assets/icons/home_unfocus.svg"
import { ReactComponent as HomeFocus } from "assets/icons/home_focus.svg"
import { ReactComponent as SetUnfocus } from "assets/icons/set_unfocus.svg"
import { ReactComponent as SetFocus } from "assets/icons/set_focus.svg"
import { ReactComponent as UserUnfocus } from "assets/icons/user_unfocus.svg"
import { ReactComponent as UserFocus } from "assets/icons/user_focus.svg"
import { ReactComponent as Logout } from "assets/icons/logout_unfocus.svg"
import { useState } from "react";

const StyledIcon = styled.div.attrs((props) => ({
  className: props.className || ''
}))`
  display: flex;
  align-items: center;
  width: 178px;
  height: 58px;
  cursor: ${(props) => props.isClick ? 'default' : 'pointer'};
  & svg {
    width: 24px;
    height: 24px;
    margin-right: 19px;
  };
  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 58px;
    padding-top: 5px;
    color: ${(props) => props.isClick ? 'var(--brand-color)' : 'var(--grey9)'};
  }

  // 設定登出樣式
  &.active {
    // 以下是不會換顏色的版本
    // & span {
    //   color: var(--grey9);
    // }
    // 以下是會換色的版本
    color: ${(props) => props.isClick ? 'var(--brand-color)' : 'var(--grey9)'};
    & svg {
      stroke: ${(props) => props.isClick ? 'var(--brand-color)' : ''};
    }
  }
`


// 接上換頁功能後，要思考按鈕一個亮，其他的不亮

function Link({ title }) {
  const [isClick, setIsClick] = useState(false)

  const handleIsClick = () => {
    setIsClick(!isClick)
  }

  if(title === '登出') {
    return (
      <StyledIcon isClick={isClick} onClick={handleIsClick} className="active">
        <Logout /><span>{title}</span>
      </StyledIcon>
    )
  }

  return (
    <StyledIcon isClick={isClick} onClick={handleIsClick}>
      { title === '首頁' && (isClick ? <HomeFocus /> : <HomeUnfocus />) }
      { title === '個人資料' && (isClick ? <UserFocus /> : <UserUnfocus />) }
      { title === '設定' && (isClick ? <SetFocus /> : <SetUnfocus />) }
      <span>{ title }</span>
    </StyledIcon>
  )
}

export default Link
