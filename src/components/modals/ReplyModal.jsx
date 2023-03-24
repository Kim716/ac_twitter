import styled from "styled-components"
import {ReactComponent as CrossFocus} from "assets/icons/cross_focus.svg"
import Avatar from "assets/images/avatar.png"
import ActButton from "components/ActButton"

const StyledDiv = styled.div`
  width: 600px;
  height: 450px;
  position: relative;
  z-index: 3;
  border-radius: 20px;
  background-color: var(--white);

  .cross-box {
    padding: 15px;
    border-bottom: 1px solid #e6ecf0;
  }
`

const StyledContent = styled.div`
  padding: 25px;
  line-height: 1.5;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  button {
    width: 65px;
    height: 40px;
    padding: 0;
    font-size: 16px;
  }

  p,
  span,
  textarea {
    margin-left: 15px;
    width: 480px;
    font-size: 17px;
  }

  textarea {
    margin-top: 10px;
    height: 150px;
    padding-top: 10px;
    padding-right: 20px;
    resize: none; //禁止拖動改變框的大小
    border: none;
    outline: none;
  }

  .user-name {
    margin-right: 5px;
    font-weight: bold;
    font-size: 20px;
  }
  
  .grey {
    color: var(--secondary);
    font-size: 14px;
  }

  .side-line {
    margin: 15px 25px;
    width: 1px;
    height: 80px;
    border-width: 2px;
    border-style: solid;
    border-color: var(--grey5);
  }
  
  .account {
    color: var(--brand-color);
  }

  .tweet-text {
    height: 90px;
  }

  .error {
    width: 120px;
    color: var(--error);
  }
`
// 假資料
const dummyData = {
    "id": 1,
    "UserId": 2,
    "description": "Non illo enim rem non esse.",
    "createdAt": "3小時",
    "updatedAt": "2023-03-22T22:37:24.000Z",
    "replyCount": 24,
    "likeCount": 0,
    "User": {
      "id": 2,
      "account": "user1",
      "name": "user1",
      "avatar": "https://loremflickr.com/320/240/man,woman/?lock=27"
    },
    "isLiked": false
  }


function ReplyItem() {
  return (
    <StyledContent className="d-flex">
      <div className="d-flex flex-column">
        <img src={Avatar} alt="" />
        <div className="side-line d-flex justify-content-center align-items-center"></div>
        <img src={Avatar} alt="" />
      </div>
      <div className="d-flex flex-column">
        <div>
          <span className="user-name">{dummyData.User.name}</span>
          <span className="grey">@ {dummyData.User.account} · {dummyData.createdAt}</span>
        </div>
        <p className="tweet-text">
          {dummyData.description}
        </p>
        <span className="grey">
          回覆給 
          <span className="account">@{dummyData.User.account}</span>
        </span>
        <textarea placeholder="推你的回覆" maxLength="140"/>
        <div className="d-flex justify-content-end align-items-center">
          <p className="error">內容不可空白</p>
          <ActButton buttonName={"回覆"}/>
        </div>
      </div>
    </StyledContent>
  )
}

function ReplyModal() {
  return (
    <StyledDiv>
      <div className="cross-box">
        <CrossFocus />
      </div>
      <ReplyItem />
    </StyledDiv>
  )
}

export default ReplyModal;