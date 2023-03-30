import styled from "styled-components";
import { ReactComponent as CrossFocus } from "assets/icons/cross_focus.svg";
import Avatar from "assets/images/avatar.png";
import ActButton from "components/ActButton";
import { useContext, useEffect } from "react";
import { TweetContext } from "contexts/TweetContext";

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
    cursor: pointer;

    &:hover {
      path {
        fill: var(--grey9);
      }
    }
  }
`;

const StyledContent = styled.div`
  padding: 25px;
  line-height: 1.5;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
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
    width: 1px;
    background-color: var(--grey5);
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
`;

function ReplyModal() {
  const { handleReplyClick, getSingleTweetAsync, tweet, tweetId } =
    useContext(TweetContext);

  useEffect(() => {
    getSingleTweetAsync(tweetId);
    //eslint-disable-next-line
  }, []);

  return (
    <StyledDiv>
      <div className="cross-box">
        <CrossFocus onClick={handleReplyClick} />
      </div>
      <StyledContent className="d-flex">
        <div className="d-flex flex-column">
          <img src={tweet.User?.avatar} alt="avatar" />
          <div className="side-line d-flex justify-content-center align-items-center"></div>
          <img src={Avatar} alt="" />
        </div>
        <div className="d-flex flex-column">
          <div>
            <span className="user-name">{tweet.User?.name}</span>
            <span className="grey">
              @ {tweet.User?.account} · {tweet.createdAt}
            </span>
          </div>
          <p className="tweet-text">{tweet.description}</p>
          <span className="grey">
            回覆給
            <span className="account">@{tweet.User?.account}</span>
          </span>
          <textarea placeholder="推你的回覆" maxLength="140" />
          <div className="d-flex justify-content-end align-items-center">
            <p className="error">內容不可空白</p>
            <ActButton buttonName={"回覆"} />
          </div>
        </div>
      </StyledContent>
    </StyledDiv>
  );
}

export default ReplyModal;
