import ReplyModal from "components/modals/ReplyModal";
import TweetModal from "components/modals/TweetModal";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 2;
  padding-top: 50px;
  background-color: rgba(0, 0, 0, .4);
  background-size: cover;
`

// 筆記：按鈕串接時，要傳入一個參數進來控制顯示的彈窗。
// if(value === "推文") {return <TweetModal />}
// if(value === "回覆") {return <ReplyModal />}
// if(value === "編輯個人資料") {return <InfoModal />}

function ModalContainer() {
  return (
    <StyledDiv className="d-flex justify-content-center">
      <ReplyModal />
    </StyledDiv>
  )
}
export default ModalContainer

