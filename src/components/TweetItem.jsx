import styled from "styled-components";
import { ReactComponent as ReplyUnfocus } from "assets/icons/reply_unfocus.svg";
import { ReactComponent as CrossUnfocus } from "assets/icons/cross_unfocus.svg";
import { ReactComponent as HeartUnfocus } from "assets/icons/heart_unfocus.svg";
import { ReactComponent as HeartFocus } from "assets/icons/heart_focus.svg";

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
    float: left;
    margin-right: 8px;
  }

  .grey {
    color: var(--secondary);
  }

  // 文字區塊的排版
  .text-box {
    .user-name {
      font-weight: bold;
      font-size: 20px;
      margin-right: 5px;
    }

    .description {
      overflow-wrap: break-word;
      padding-top: 15px;
      line-height: 1.6;
    }
  }

  // 使用者頁面，調整3欄式icon排版
  .icon-box {
    margin-top: 10px;
    height: 16px;

    span {
      margin-right: 20px;
    }

    svg {
      width: 16px;
      height: 16px;
      margin-right: 5px;
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
  const handleLikeClick = () => {
    // 愛心的點擊反應是直接根據傳進來的 isLiked 資料來判斷呈現，之後他綁定的事件就是改動資料 變成喜歡或取消喜歡，有可能要思考是不是在父層處理這個事件
  };

  return (
    <StyledDiv className="d-flex" data-id={tweetId}>
      <img src={avatar} alt="" data-id={userId} />
      <div className="d-flex flex-column flex-wrap text-box">
        <div>
          <span className="user-name">{name}</span>
          <span className="grey">
            @{account}・{createdAt}
          </span>
        </div>
        {/* 最大顯示字數140字 */}
        <p className="description">{description}</p>
        <div className="icon-box d-flex">
          <div>
            <ReplyUnfocus className="reply-icon" />
            <span>{replyCount}</span>
          </div>
          <div onClick={handleLikeClick}>
            {isLiked ? <HeartFocus /> : <HeartUnfocus />}
            <span>{likeCount}</span>
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
