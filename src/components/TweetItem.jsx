import styled from "styled-components";
import { ReactComponent as ReplyUnfocus } from "assets/icons/reply_unfocus.svg";
import { ReactComponent as CrossUnfocus } from "assets/icons/cross_unfocus.svg";
import { ReactComponent as HeartUnfocus } from "assets/icons/heart_unfocus.svg";
import { ReactComponent as HeartFocus } from "assets/icons/heart_focus.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postTweetLike, postTweetUnLike } from "api/tweetAuth";


const StyledDiv = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #e6ecf0;
  cursor: pointer;

  // 管理者頁面不需要點擊
  &:has(.delete-btn) {
    cursor: default;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 8px;
    border-radius: 50%;
    object-fit: cover;

    &:hover {
      outline: 2px solid var(--light-orange);
    }
  }

  .grey {
    color: var(--secondary);
  }

  // 文字區塊的排版
  .text-box {
    width: calc(${100 % -50}px);

    .user-name {
      font-weight: bold;
      font-size: 20px;
      margin-right: 5px;
    }

    .description {
      overflow-wrap: anywhere;
      padding-top: 15px;
      line-height: 1.6;
    }
  }

  // 使用者頁面，調整3欄式icon排版
  .icon-box {
    margin-top: 10px;
    height: 20px;

    span {
      margin-right: 20px;
      color: var(--secondary);
      font-family: var(--number);
      font-weight: 600;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;

      &:hover {
        path {
          fill: var(--brand-color);
        }
      }
    }
  }

  // 管理者頁面
  .delete-btn {
    cursor: pointer;

    &:hover {
      path {
        fill: var(--brand-color);
      }
    }
  }
`;

// 前台使用的樣式
function UserTweetItem({
  tweetId,
  avatar,
  userId,
  name,
  account,
  createdAt,
  description,
  replyCount,
  likeCount,
  isLiked,
}) {
  const navigate = useNavigate();
  const [isTweetLike, setIsTweetLike] = useState(isLiked);
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

  const handleTweetItemClick = () => {
    navigate(`/tweet/${tweetId}`);
  };

  // 切換愛心狀態
  const handleLikeClick = async (e) => {
    e.stopPropagation();
    try {
      if (isTweetLike) {
        await postTweetUnLike(tweetId);
        setCurrentLikeCount(currentLikeCount - 1);
      } else {
        await postTweetLike(tweetId);
        setCurrentLikeCount(currentLikeCount + 1);
      }
      setIsTweetLike(!isTweetLike);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAvatarClick = (e) => {
    e.stopPropagation();
    navigate(`/user/${e.target.dataset.id}`);
  };

  const handleReplyClick = (e) => {
    e.stopPropagation();
    console.log("reply");
  };

  return (
    <StyledDiv
      className="d-flex"
      data-id={tweetId}
      onClick={handleTweetItemClick}
    >
      <img src={avatar} alt="" data-id={userId} onClick={handleAvatarClick} />
      <div className="text-box flex-grow-1">
        <div>
          <span className="user-name">{name}</span>
          <span className="grey">
            @{account}・{createdAt}
          </span>
        </div>
        {/* 最大顯示字數140字 */}
        <p className="description">{description}</p>
        <div className="icon-box d-flex">
          <div className="d-flex align-items-center" onClick={handleReplyClick}>
            <ReplyUnfocus className="reply-icon" />
            <span>{replyCount}</span>
          </div>
          <div className="d-flex align-items-center" onClick={handleLikeClick}>
            {isTweetLike ? <HeartFocus /> : <HeartUnfocus />}
            <span>{currentLikeCount}</span>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
}

// 後台使用的樣式
function AdminTweetItem({
  tweetId,
  avatar,
  name,
  account,
  createdAt,
  description,
  onClick,
}) {
  return (
    <StyledDiv className="d-flex" data-id={tweetId}>
      <img src={avatar} alt="" />
      <div className="d-flex flex-column flex-wrap flex-grow-1 text-box">
        <div>
          <span className="user-name">{name}</span>
          <span className="grey">
            @{account}・{createdAt}
          </span>
        </div>
        {/* 最大顯示字數140字 */}
        <p className="description">{description}</p>
      </div>
      <CrossUnfocus className="delete-btn" onClick={() => onClick(tweetId)} />
    </StyledDiv>
  );
}

export { UserTweetItem, AdminTweetItem };
