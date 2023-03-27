import { AdminNavBar } from "components/NavBar";
import Header from "components/Header";
import { AdminTweetItem } from "components/TweetItem";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAdminTweets } from "api/adminAuth";

const StyledTweetsDiv = styled.div`
  border-right: 1px solid #e6ecf0;
`;

const StyledTweetsCollection = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  overflow: auto;
`;

function AdminTweetsPage() {
  const [tweets, setTweets] = useState([]);

  // useEffect
  useEffect(() => {
    const showTweets = async () => {
      const getTweets = await getAdminTweets();
      setTweets(getTweets);
    };

    showTweets();
  }, []);

  return (
    <div className="d-flex">
      <AdminNavBar />
      <StyledTweetsDiv className="col-8">
        <Header>
          <h1>推文清單</h1>
        </Header>
        <StyledTweetsCollection>
          {/* 使用 map 跑陣列 */}
          {tweets.map((tweet) => (
            <AdminTweetItem
              key={tweet.id}
              id={tweet.id}
              avatar={tweet.User.avatar}
              name={tweet.User.name}
              account={tweet.User.account}
              createdAt={tweet.createdAt}
              description={tweet.description}
            />
          ))}
        </StyledTweetsCollection>
      </StyledTweetsDiv>
    </div>
  );
}

export default AdminTweetsPage;
