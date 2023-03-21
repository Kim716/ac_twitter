import styled from "styled-components";
import { ReactComponent as HomeUnfocus } from "assets/icons/home_unfocus.svg"
import { ReactComponent as HomeFocus } from "assets/icons/home_focus.svg"
import { ReactComponent as SetUnfocus } from "assets/icons/set_unfocus.svg"
import { ReactComponent as SetFocus } from "assets/icons/set_focus.svg"
import { ReactComponent as UserUnfocus } from "assets/icons/user_unfocus.svg"
import { ReactComponent as UserFocus } from "assets/icons/user_focus.svg"
import { useState } from "react";

const StyledIcon = styled.div`
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
`


function Link() {
  const [isClick, setIsClick] = useState(false)

  const handleIsClick = () => {
    setIsClick(!isClick)
  }

  return (
    <StyledIcon isClick={isClick} onClick={handleIsClick}>
        {isClick ? <SetFocus /> : <SetUnfocus />}
        <span>設定</span>
    </StyledIcon>
  )
}

export default Link
