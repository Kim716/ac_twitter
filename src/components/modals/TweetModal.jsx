import styled from "styled-components"
import {ReactComponent as CrossFocus} from "assets/icons/cross_focus.svg"
import Avatar from "assets/images/avatar.png"
import ActButton from "components/ActButton"


const StyledDiv = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 20px;
  background-color: var(--white);

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  // 共同CSS設定
  .cross-box,
  .content {
    padding: 15px 20px;
  }

  .cross-box {
    border-bottom: 1px solid #e6ecf0;
  }

  // 文字區調整
  .content {
    height: 80%;

    button,
    textarea {
      font-size: 17px;
    }

    textarea {
      margin: 5px 15px;
      width: 500px;
      height: 120px;
      resize: none; // 禁止拖動改變框的大小
      border: none; // 隱藏邊框
      outline: none; // 輸入過程中不顯示邊框
    }

    p {
      margin-right: 20px;
      color: var(--error);
      font-size: 15px;
    }

    button {
      width: 65px;
      height: 40px;
      margin-top: auto;
      padding: 0;
    }
  }
`

// 筆記：預想用 useState 來確認彈窗開關，useEffect 來控制收到狀態改變時，要做的行為。


const TweetModal = () => {
  return (
    <StyledDiv>
      <div className="cross-box">
        <CrossFocus />
      </div>
      <div className="content d-flex flex-column">
        <div className="d-flex">
          <img src={Avatar} alt="" />
          <textarea placeholder="有什麼新鮮事？" maxLength="140"/>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <p>字數不可超過140字</p>
          <ActButton buttonName={"推文"}/>
        </div>
      </div>
    </StyledDiv>
  )
}

export default TweetModal