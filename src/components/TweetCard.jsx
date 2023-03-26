import styled from "styled-components";

import { ReactComponent as ReplyIcon } from "assets/icons/reply_unfocus.svg";
import { ReactComponent as UnLikeIcon } from "assets/icons/heart_unfocus.svg";
import { ReactComponent as LikeIcon } from "assets/icons/heart_focus.svg";
import { useState } from "react";

const StyledDiv = styled.div`
  background: var(--white);
  padding: 16px;
  border-bottom: 1px solid var(--grey3);

  .card_content,
  .card_info {
    border-bottom: 1px solid var(--grey3);
  }

  .card_content {
    & > * {
      margin-bottom: 8px;
    }

    .content_head {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 8px;
      }

      .name {
        margin-bottom: 8px;
        color: var(--grey9);
        font-weight: 700;
      }

      .account {
        color: var(--secondary);
        font-size: 14px;
      }
    }

    .description {
      font-weight: 300;
      font-size: 24px;
      line-height: 36px;
    }

    .createdAt {
      color: var(--secondary);
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
    }
  }

  .card_info {
    padding: 16px 0;

    p {
      margin-right: 24px;
      color: var(--secondary);

      span {
        margin-right: 4px;
        font-family: var(--number);
        color: #000000;
        font-weight: 700;
        font-size: 18px;
      }
    }
  }

  .card_action {
    padding-top 18px;

    svg {
      margin-right: 130px;
      width: 30px;
      height: 30px;
      cursor: pointer;

      &:hover {
      path {
        fill: var(--brand-color);
      }
    }
    }
  }
`;

// {
//   "id": 1,
//   "UserId": 2,
//   "description": "Ut fugit enim esse quibusdam ut.",
//   "createdAt": "下午 12:53 2023年03月03日",
//   "updatedAt": "2023-03-23T14:56:53.000Z",
//   "replyCount": 12,
//   "likeCount": 6,
//   "User": {
//     "id": 2,
//     "account": "user1",
//     "name": "user1",
//     "avatar": "https://loremflickr.com/320/240/man,woman/?lock=46"
//   },
//   "isLiked": false
// }

function TweetCard() {
  const [isLike, setIsLike] = useState(false);

  // 現在是 unlike ，點擊要變成 like
  const handleUnLikeClick = async () => {
    setIsLike(true);
  };

  // 現在是 like ，點擊要變成 unlike
  const handleLikeClick = async () => {
    setIsLike(false);
  };

  return (
    <StyledDiv>
      <div className="card_content">
        <div className="content_head d-flex align-items-center">
          <img
            src="https://loremflickr.com/320/240/man,woman/?lock=46"
            alt="avatar"
          />
          <div>
            <p className="name">kim1</p>
            <p className="account">@kim1</p>
          </div>
        </div>
        <p className="description">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
        </p>
        <p className="createdAt">下午 12:53・2023年03月03日</p>
      </div>
      <div className="card_info">
        <div className="d-flex">
          <p>
            <span>12</span>回覆
          </p>
          <p>
            <span>808</span>喜歡
          </p>
        </div>
      </div>
      <div className="card_action">
        <ReplyIcon />
        {isLike ? (
          <LikeIcon onClick={handleLikeClick} />
        ) : (
          <UnLikeIcon onClick={handleUnLikeClick} />
        )}
      </div>
    </StyledDiv>
  );
}

export default TweetCard;
