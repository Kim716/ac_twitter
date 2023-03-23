import styled from "styled-components";
import Avatar from "assets/images/avatar_default.png"
import {ReactComponent as ReplyUnfocus} from "assets/icons/reply_unfocus.svg"
import {ReactComponent as CrossUnfocus} from "assets/icons/cross_unfocus.svg"
import {ReactComponent as HeartUnfocus} from "assets/icons/heart_unfocus.svg"
import {ReactComponent as HeartFocus} from "assets/icons/heart_focus.svg"
import {ReactComponent as MailUnfocus} from "assets/icons/mail_unfocus.svg"
import {ReactComponent as NotiUnfocus} from "assets/icons/noti_unfocus.svg"
import {ReactComponent as NotiFocus} from "assets/icons/noti_focus.svg"
import { useState } from "react";

const StyledDiv = styled.div`
  width: 100%;
  height: 150px;
  padding: 16px 24px;
  border: 1px solid var(--grey3);
  img, span, p, svg {
    cursor: pointer;
  }
  img {
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 8px;
  }
  // 文字區塊的排版
  .text-box {
    width: 90%;
    .user-name {
      font-weight: bold;
      font-size: 17px;
      margin-right: 5px;
    }
    .content {
      width: 100%;
      overflow-wrap: break-word;
      p {
        padding-top: 15px;
        line-height: 1.6;
      }
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
`
// 前台使用的樣式
function UserTweetItem() {
  const [isClick, setIsClick] = useState(false)

  const handleIsClick = () => {
    setIsClick(!isClick);
  };

  return (
    <StyledDiv className="d-flex">
      <img src={Avatar} alt="" />
      <div className="d-flex flex-column flex-wrap text-box">
        <div>
          <span className="user-name">name</span>
          <span>@apple·3小時</span>
        </div> 
          {/* 最大顯示字數140字 */}
        <div className="content">
          <p>Forget real people. Real people don’t text you back, they have incorrect opinions about the latest episode of Riverdale, and they continue u</p>
        </div>
        <div className="icon-box" isClick={isClick} onClick={handleIsClick}>
          <ReplyUnfocus className="reply-icon" /><span>123</span>
          {isClick ? <HeartFocus /> : <HeartUnfocus />}<span>1233</span>
        </div>
      </div>
    </StyledDiv>
  )
}
// 後台使用的樣式
function AdminTweetItem() {
  return (
    <StyledDiv className="d-flex">
      <img src={Avatar} alt="" />
      <div className="d-flex flex-column flex-wrap text-box">
        <div>
          <span className="user-name">name</span>
          <span>@apple·3小時</span>
        </div> 
          {/* 最大顯示字數140字 */}
        <div className="content">
          <p>Forget real people. Real people don’t text you back, they have incorrect opinions about the latest episode of Riverdale, and they continue u</p>
        </div>
      </div>
      <CrossUnfocus />
    </StyledDiv>
  )
}


export {UserTweetItem, AdminTweetItem};