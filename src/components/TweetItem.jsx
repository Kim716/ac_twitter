import styled from "styled-components";
import Avatar from "assets/images/avatar_default.png";
import { ReactComponent as ReplyUnfocus } from "assets/icons/reply_unfocus.svg";
import { ReactComponent as CrossUnfocus } from "assets/icons/cross_unfocus.svg";
import { ReactComponent as HeartUnfocus } from "assets/icons/heart_unfocus.svg";
import { ReactComponent as HeartFocus } from "assets/icons/heart_focus.svg";
import { useState } from "react";

const StyledDiv = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #e6ecf0;
  img,
  span,
  p,
  svg {
    cursor: pointer;
  }

  .grey {
    color: var(--secondary);
  }

  img {
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 8px;
  }

  // 文字區塊的排版
  .text-box {
    .user-name {
      font-weight: bold;
      font-size: 20px;
      margin-right: 5px;
    }

    .content {
      overflow-wrap: break-word;
      padding-top: 15px;
      line-height: 1.6;
    }
  }

  // 調整3欄式icon排版
  .icon-box {
    margin-top: 10px;
    height: 16px;
    span {
      margin-right: 20px;
    }
    
    svg {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
`;
// 前台使用的樣式
function UserTweetItem() {
  const [isClick, setIsClick] = useState(false);

  const handleIsClick = () => {
    setIsClick(!isClick);
  };

  return (
    <StyledDiv className="d-flex">
      <img src={Avatar} alt="" />
      <div className="d-flex flex-column flex-wrap text-box">
        <div>
          <span className="user-name">name</span>
          <span className="grey">@apple·3小時</span>
        </div>
        {/* 最大顯示字數140字 */}
        <p className="content">
          Forget real people. Real people don’t text you back, they have
          incorrect opinions about the latest episode of Riverdale, and they
          continue u
        </p>
        <div className="icon-box d-flex">
          <div>
            <ReplyUnfocus className="reply-icon" />
            <span>123</span>
          </div>
          <div isClick={isClick} onClick={handleIsClick}>
            {isClick ? <HeartFocus /> : <HeartUnfocus />}
            <span>1233</span>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

// 後台使用的樣式
function AdminTweetItem() {
  return (
    <StyledDiv className="d-flex">
      <img src={Avatar} alt="" />
      <div className="d-flex flex-column flex-wrap text-box">
        <div>
          <span className="user-name">name</span>
          <span className="grey">@apple·3小時</span>
        </div>
        {/* 最大顯示字數140字 */}
        <p className="content">
          Forget real people. Real people don’t text you back, they have
          incorrect opinions about the latest episode of Riverdale, and they
          continue u
        </p>
      </div>
      <CrossUnfocus />
    </StyledDiv>
  );
}

export { UserTweetItem, AdminTweetItem };
