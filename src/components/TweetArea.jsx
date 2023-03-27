import styled from "styled-components";
import Avatar from "assets/images/avatar.png";
import ActButton from "components/ActButton";

// 這個元件不管點哪個區塊，都是到 TweetPage

const StyledDiv = styled.div`
  height: 200px;
  padding: 16px 27px 0 27px;
  border-bottom: 10px solid #E6ECF0;
  cursor: pointer;
  button {
    width: 65px;
    margin: auto 0 15px 0;
    margin-bottom: 25px;
    height: 40px;
    padding: 0;
    font-size: 16px;
  }
  p {
    padding: 0 8px;
    line-height: 50px;
    font-weight: 700;
    color: var(--secondary);
  }
  img {
    width: 50px;
    height: 50px;
  }
`

function TweetArea() {
  return (
    <StyledDiv className="d-flex justify-content-between">
      <div className="d-flex">
        <img src={Avatar} alt="" />
        <p>有什麼新鮮事？</p>
      </div>
      <ActButton buttonName={"推文"} />
    </StyledDiv>
  )
}

export default TweetArea