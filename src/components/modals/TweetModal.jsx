import styled from "styled-components";
import { useContext, useState } from "react";
import { TweetContext } from "contexts/TweetContext";

// Components
import { ReactComponent as CrossFocus } from "assets/icons/cross_focus.svg";
import Avatar from "assets/images/avatar.png";
import ActButton from "components/ActButton";
import { postTweet } from "api/tweetAuth";

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
    padding: 16px;
  }

  .cross-box {
    border-bottom: 1px solid #e6ecf0;

    svg {
      cursor: pointer;

      &:hover {
        path {
          fill: var(--grey9);
        }
      }
    }
  }

  .content {
    textarea {
      margin: 10px;
      height: 150px;
      resize: none; // 禁止拖動改變框的大小
      border: none; // 隱藏邊框
      outline: none; // 輸入過程中不顯示邊框

      font-size: 17px;
    }
  }

  .footer {
    p {
      margin-right: 20px;
      color: var(--grey7);
      font-size: 15px;

      span {
        color: var(--error);
      }
    }

    button {
      width: 80px;
      margin-top: auto;
      padding: 8px 16px;
    }
  }
`;

const TweetModal = () => {
  const [description, setDescription] = useState("");
  const { handleTweetClick } = useContext(TweetContext);

  const handleAddTweetClick = async () => {
    try {
      const res = await postTweet({ description });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledDiv className="d-flex flex-column">
      <div className="cross-box">
        <CrossFocus onClick={handleTweetClick} />
      </div>
      <div className="content flex-grow-1">
        <div className="d-flex">
          <img src={Avatar} alt="" />
          <textarea
            className="flex-grow-1"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="有什麼新鮮事？"
            maxLength="140"
          />
        </div>
        <div className="footer d-flex justify-content-end align-items-center">
          <p>
            {description.length === 140 && <span>字數不可超過140字</span>}{" "}
            {description.length}/140
          </p>
          <ActButton buttonName={"推文"} onClick={handleAddTweetClick} />
        </div>
      </div>
    </StyledDiv>
  );
};

export default TweetModal;
