import { ReactComponent as TweetsIcon } from "assets/icons/tweets_unfocus.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart_unfocus.svg";
import Header from "components/Header";
import cover from "assets/images/cover.png";
import avatar from "assets/images/avatar.png";
import styled from "styled-components";

// data
const dummyUsers = [
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
  {
    id: 4,
    avatar: "https://loremflickr.com/320/240/man,woman/?lock=22",
    cover: "https://i.imgur.com/WFcXd3Y.png",
    tweetCount: 10,
    followerCount: 6,
    followingCount: 6,
    likeCount: 38,
  },
];

const StyledCardCollection = styled.div`
  background: var(--success);
  width: 100%;
  height: calc(100% - 72px);
  padding: 16px;
  overflow: scroll;
`;

const StyledUserCard = styled.div`
  background: #f6f7f8;
  height: 314px;
  width: 210px;
  border-radius: 10px;

  & .head {
    position: relative;
    width: 100%;

    & .cover {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    & .avatar {
      position: absolute;
      width: 100px;
      height: 100px;
      border: 4px solid var(--white);
      border-radius: 50%;
      left: 50%;
      top: 45%;
      transform: translateX(-50%);
    }
  }

  & .name {
    margin-top: 32px;
    font-weight: 700;
  }

  & .account {
    margin-top: 8px;
    font-size: 14px;
    color: var(--secondary);
  }

  & .user-data {
    width: 80%;
    margin-top: 16px;
    color: var(--grey9);

    & span {
      margin-left: 4px;
    }
  }

  & .follow-data {
    width: 77%;
    margin-top: 14px;
    color: var(--secondary);
    font-size: 14px;

    & span {
      color: var(--grey9);
    }
  }
`;

// {
//     "id": 4,
//     "avatar": "https://loremflickr.com/320/240/man,woman/?lock=22",
//     "cover": "https://i.imgur.com/WFcXd3Y.png",
//     "tweetCount": 10,
//     "followerCount": 6,
//     "followingCount": 6,
//     "likeCount": 38
//   },

function UserCard() {
  return (
    <StyledUserCard>
      <div className="head">
        <img src={cover} alt="cover" className="cover" />
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <h2 className="name">John Doe</h2>
        <p className="account">@heyjohn</p>
        <div className="user-data d-flex justify-content-evenly">
          <p className="d-flex align-items-center justify-content-between">
            <TweetsIcon />
            <span>1.5k</span>
          </p>
          <p className="d-flex align-items-center justify-content-between">
            <HeartIcon />
            <span>20k</span>
          </p>
        </div>
        <div className="follow-data d-flex justify-content-between">
          <p>
            <span>34 個</span>跟隨中
          </p>
          <p>
            <span>34 位</span>跟隨者
          </p>
        </div>
      </div>
    </StyledUserCard>
  );
}

function UserCards() {
  return (
    <div className="d-flex col-9 flex-column">
      <Header>
        <h1>使用者列表</h1>
      </Header>

      <StyledCardCollection className="d-flex">{}</StyledCardCollection>
    </div>
  );
}

export default UserCards;
