import { AdminNavBar } from "components/NavBar";
import Header from "components/Header";
import { AdminTweetItem } from "components/TweetItem";

import styled from "styled-components";

const StyledTweetsDiv = styled.div`
  border-right: 1px solid #e6ecf0;
`;

const StyledTweetsCollection = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  overflow: scroll;
`;

function AdminTweetsPage() {
  return (
    <div className="d-flex">
      <AdminNavBar />
      <StyledTweetsDiv className="col-8">
        <Header>
          <h1>推文清單</h1>
        </Header>
        <StyledTweetsCollection>
          {/* 等後端資料格式出來再調整成動態跑版 */}
          <AdminTweetItem />
          <AdminTweetItem />
          <AdminTweetItem />
          <AdminTweetItem />
          <AdminTweetItem />
          <AdminTweetItem />
          <AdminTweetItem />
        </StyledTweetsCollection>
      </StyledTweetsDiv>
    </div>
  );
}

export default AdminTweetsPage;
