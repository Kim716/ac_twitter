import ReplyModal from "components/modals/ReplyModal";
import TweetModal from "components/modals/TweetModal";
import styled from "styled-components";

const StyledDiv = styled.html`
  height: 100vh;
  width: 100%;
  padding-top: 50px;
  background-color: var(--gray4);
  background-size: cover;
`

function ModalContainer() {
  return (
    <StyledDiv className="d-flex justify-content-center">
      <TweetModal />
    </StyledDiv>
  )
}
export default ModalContainer

