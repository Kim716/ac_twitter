import MainContainer from "components/containers/MainContainer";
import SideBar from "components/SideBar";
import ViewContainer from "components/containers/ViewContainer";
import TweetArea from "components/TweetArea";
import Header from "components/Header";
import { NavBar } from "components/NavBar";
import { UserTweetItem } from "components/TweetItem";

const dummyTweets = [
  {
    id: 2,
    UserId: 3,
    description: "In aliquid voluptatem ipsa est laborum.",
    createdAt: "下午 06:16 2023年03月16日",
    updatedAt: "2023-03-23T14:56:53.000Z",
    likeCount: 4,
    replyCount: 12,
    User: {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=28",
    },
    isLiked: true,
  },
  {
    id: 2,
    UserId: 3,
    description: "In aliquid voluptatem ipsa est laborum.",
    createdAt: "下午 06:16 2023年03月16日",
    updatedAt: "2023-03-23T14:56:53.000Z",
    likeCount: 4,
    replyCount: 12,
    User: {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=28",
    },
    isLiked: false,
  },
  {
    id: 2,
    UserId: 3,
    description: "In aliquid voluptatem ipsa est laborum.",
    createdAt: "下午 06:16 2023年03月16日",
    updatedAt: "2023-03-23T14:56:53.000Z",
    likeCount: 4,
    replyCount: 12,
    User: {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=28",
    },
    isLiked: true,
  },
  {
    id: 2,
    UserId: 3,
    description: "In aliquid voluptatem ipsa est laborum.",
    createdAt: "下午 06:16 2023年03月16日",
    updatedAt: "2023-03-23T14:56:53.000Z",
    likeCount: 4,
    replyCount: 12,
    User: {
      id: 3,
      account: "user2",
      name: "user2",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=28",
    },
    isLiked: true,
  },
];

function MainPage() {
  return (
    <div className="d-flex">
      <NavBar />
      <MainContainer>
        <ViewContainer>
          <Header>
            <h1>首頁</h1>
          </Header>
          <TweetArea />
          <div>
            {dummyTweets.map((tweet) => (
              <UserTweetItem
                tweetId={tweet.id}
                avatar={tweet.User.avatar}
                userId={tweet.UserId}
                name={tweet.User.name}
                account={tweet.User.account}
                createdAt={tweet.createdAt}
                description={tweet.description}
                replyCount={tweet.replyCount}
                likeCount={tweet.likeCount}
                isLiked={tweet.isLiked}
              />
            ))}
          </div>
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default MainPage;
