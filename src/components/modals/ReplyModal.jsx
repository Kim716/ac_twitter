import styled from "styled-components";
import { ReactComponent as CrossFocus } from "assets/icons/cross_focus.svg";
import Avatar from "assets/images/avatar.png";
import ActButton from "components/ActButton";
import { useContext, useEffect } from "react";
import { TweetContext } from "contexts/TweetContext";

const StyledDiv = styled.div`
  width: 600px;
  height: 500px;
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

  .side-line {
    margin: 15px 25px;
    width: 2px;
    height: 115px;
    background-color: var(--grey5);
  }

  .content-area {
    .title {
      .user-name {
        margin-right: 5px;
        font-weight: bold;
        font-size: 20px;
      }

      span {
        color: var(--secondary);
        font-size: 14px;
      }
    }

    .tweet-text {
      font-size: 16px;
      line-height: 26px;
      min-height: 130px;
    }

    .reply-to {
      margin-top: 5px;
      color: var(--secondary);
      font-size: 14px;

      .account {
        margin-left: 5px;
        color: var(--brand-color);
      }
    }
  }

  button {
    width: 65px;
    height: 40px;
    padding: 0;
    font-size: 16px;
  }

  textarea {
    margin-top: 10px;
    width: 100%;
    height: 150px;
    padding: 10px;
    resize: none; //禁止拖動改變框的大小
    border: none;
    outline: none;
    font-size: 17px;
  }

  .error {
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
        <div className="d-flex flex-column me-3">
          <img src={tweet.User?.avatar} alt="avatar" />
          <div className="side-line d-flex justify-content-center align-items-center"></div>
          <img src={Avatar} alt="" />
        </div>
        <div className="content-area flex-grow-1">
          <div className="d-flex align-items-center title">
            <p className="user-name">{tweet.User?.name}</p>
            <span className="grey">
              @ {tweet.User?.account} · {tweet.createdAt}
            </span>
          </div>
          <p className="tweet-text">{tweet.description}</p>
          <p className="reply-to">
            回覆給
            <span className="account">@{tweet.User?.account}</span>
          </p>
          <textarea placeholder="推你的回覆" maxLength="140" />
          <div className="d-flex justify-content-end align-items-center">
            <p className="me-3">
              <span className="error me-3">內容不可空白</span> 0/140
            </p>
            <ActButton buttonName={"回覆"} />
          </div>
        </div>
      </StyledContent>
    </StyledDiv>
  );
}

export default ReplyModal;
