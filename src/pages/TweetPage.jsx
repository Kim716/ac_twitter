import MainContainer from "components/containers/MainContainer";
import ModalContainer from "components/containers/ModalContainer";
import ViewContainer from "components/containers/ViewContainer";
import Header from "components/Header";
import NavBar from "components/NavBar";
import ReplyItem from "components/ReplyItem";
import SideBar from "components/SideBar";
import TweetCard from "components/TweetCard";
import { useState } from "react";

const dummyReplys = [
  {
    id: 590,
    comment: "Sequi reiciendis quaerat voluptas enim.",
    UserId: 2,
    TweetId: 45,
    createdAt: "下午 06:49 2023年03月12日",
    updatedAt: "2023-03-23T23:55:46.000Z",
    User: {
      id: 2,
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=46",
    },
    Tweet: {
      id: 45,
      UserId: 6,
      User: {
        id: 6,
        account: "user5",
      },
    },
  },
  {
    id: 590,
    comment: "Sequi reiciendis quaerat voluptas enim.",
    UserId: 2,
    TweetId: 45,
    createdAt: "下午 06:49 2023年03月12日",
    updatedAt: "2023-03-23T23:55:46.000Z",
    User: {
      id: 2,
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=46",
    },
    Tweet: {
      id: 45,
      UserId: 6,
      User: {
        id: 6,
        account: "user5",
      },
    },
  },
  {
    id: 590,
    comment: "Sequi reiciendis quaerat voluptas enim.",
    UserId: 2,
    TweetId: 45,
    createdAt: "下午 06:49 2023年03月12日",
    updatedAt: "2023-03-23T23:55:46.000Z",
    User: {
      id: 2,
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=46",
    },
    Tweet: {
      id: 45,
      UserId: 6,
      User: {
        id: 6,
        account: "user5",
      },
    },
  },
  {
    id: 590,
    comment: "Sequi reiciendis quaerat voluptas enim.",
    UserId: 2,
    TweetId: 45,
    createdAt: "下午 06:49 2023年03月12日",
    updatedAt: "2023-03-23T23:55:46.000Z",
    User: {
      id: 2,
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=46",
    },
    Tweet: {
      id: 45,
      UserId: 6,
      User: {
        id: 6,
        account: "user5",
      },
    },
  },
  {
    id: 590,
    comment: "Sequi reiciendis quaerat voluptas enim.",
    UserId: 2,
    TweetId: 45,
    createdAt: "下午 06:49 2023年03月12日",
    updatedAt: "2023-03-23T23:55:46.000Z",
    User: {
      id: 2,
      name: "user1",
      account: "user1",
      avatar: "https://loremflickr.com/320/240/man,woman/?lock=46",
    },
    Tweet: {
      id: 45,
      UserId: 6,
      User: {
        id: 6,
        account: "user5",
      },
    },
  },
];

function TweetPage() {
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  return (
    <div className="d-flex">
      {isTweetModalShow && <ModalContainer value="推文" />}
      <NavBar isUser={true} onTweetClick={handleTweetClick} status="首頁" />
      <MainContainer>
        <ViewContainer>
          <Header backIcon="true">
            <h1>推文</h1>
          </Header>
          <TweetCard />
          {/* 以下會跑 map */}
          {dummyReplys.map((reply) => (
            <ReplyItem
              userId={reply.UserId}
              avatar={reply.User.avatar}
              name={reply.User.name}
              account={reply.User.account}
              createAt={reply.createdAt}
              replyTo={reply.Tweet.User.account}
              comment={reply.comment}
            />
          ))}
        </ViewContainer>
        <SideBar />
      </MainContainer>
    </div>
  );
}

export default TweetPage;
