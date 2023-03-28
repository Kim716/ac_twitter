import styled from "styled-components";
import StatusButton from "components/StatusButton";
import { useEffect, useState } from "react";
import { getTopUsers } from "api/tweetAuth";

const StyledDiv = styled.div`
  height: 100vh;
  border-left: 1px solid var(--grey3);
  padding: 10px 25px;
`

const StyledPopular = styled.div`
  background-color: var(--grey1);
  width: 270px;

  .header {
    padding: 24px;
    border-bottom: 1px solid var(--grey3);
    h1 {
      width: 96px;
      height: 26px;
      font-weight: 700;
      font-size: 24px;
    }
  }
`

const StyledPopularItem = styled.div`
  height: 60px;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .user-title {
    margin: 0 10px;
    width: 80px;
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 1.3;
    }
    .user-name {
      font-weight: bold;
    }
  }
  button {
    margin-left: auto;
  }
`;

// 傳入TopUsers 資料。
function PopularCard({ topUser, onFollowClick }) {
  return (
    <StyledPopularItem className="d-flex">
      <img src={topUser.avatar} alt="" />
      <div className="user-title d-flex flex-column">
        <p className="user-name">{topUser.name}</p>
        <p>@{topUser.account}</p>
      </div>
      <StatusButton
        defaultName={topUser.isFollowed ? "正在跟隨" : "跟隨"}
        clickName={topUser.isFollowed ? "正在跟隨" : "跟隨"}
        onFollowClick={(id) => onFollowClick?.(id)}
        topUser={topUser}
        isFollowed={topUser.isFollowed}
      />
    </StyledPopularItem>
  );
}


function SideBar() {
  const [topUsers, setTopUsers] = useState([]);
  
  useEffect(() => {
    const getTopUsersAsync = async () => {
      try {
        const topUsers = await getTopUsers();
        setTopUsers(topUsers.map((topUser) => ({ ...topUser })));
      } catch (error) {
        console.error(error);
      }
    };
    getTopUsersAsync();
  }, []);

  // 點擊更改跟隨狀態
  const handleFollowClick = (id) => {
    setTopUsers((prveTopUser) => {
      return prveTopUser.map((topUser) => {
        if (topUser.id === id) {
          return {
            ...topUser,
            isFollowed: !topUser.isFollowed,
          };
        }
        return topUser;
      });
    });
  };

  return (
    <StyledDiv className="col-4">
      <StyledPopular>
        <div className="header">
          <h1>推薦跟隨</h1>
        </div>
        {topUsers.map((topUser) => {
          return (
            <PopularCard
              key={topUser.id}
              topUser={topUser}
              onFollowClick={handleFollowClick}
            />
          );
        })}
      </StyledPopular>
    </StyledDiv>
  );
}

export default SideBar;