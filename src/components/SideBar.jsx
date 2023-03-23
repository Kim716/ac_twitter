import styled from "styled-components";
import Avatar from "assets/images/avatar_default.png";
import StatusButton from "components/StatusButton";

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
`

// 檢查10個使用者在頁面上的效果，等傳入資料後修改此處或刪除。
function PopularCard() {
  return (
    <StyledPopularItem className="d-flex">
      <img src={Avatar} alt="" />
      <div className="user-title d-flex flex-column">
        <p className="user-name">Name2312341234</p>
        <p>@帳號312421421414</p>
      </div>
      <StatusButton defaultName={"跟隨"} clickName={"正在跟隨"}/>
    </StyledPopularItem>
  )
}
// 以上等傳入資料後修改此處或刪除。

function SideBar() {
  return (
    <StyledDiv className="col-4">
      <StyledPopular>
        <div className="header">
          <h1>推薦跟隨</h1>
        </div>
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </StyledPopular>
    </StyledDiv>
  )
}

export default SideBar;