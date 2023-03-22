import styled from "styled-components";
import Avatar from "assets/images/avatar.png";
import Button from "./ActButton";

// 這個元件不管點哪個區塊，都是到 TweetPage

const StyledDiv = styled.div`
  height: 130px;
  display: flex;
  padding-top: 16px;
  padding-left: 27px;
  border-top: 1px solid #E6ECF0;
  border-bottom: 10px solid #E6ECF0;
  cursor: pointer;
  & Button {
    width: 64px;
    height: 40px;
    margin-top: 50px;
    margin-right: 25px;
    padding: 0;
    font-size: 18px;
  }
  p {
    width: 80%;
    height: 50px;
    border-style: none;
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
    <StyledDiv>
      <img src={Avatar} alt="" />
      <p>有什麼新鮮事？</p>
      <Button buttonName={"推文"}/>
    </StyledDiv>
  )
}

export default TweetArea