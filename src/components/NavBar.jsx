import styled from "styled-components";
import Logo from "./Logo";
import LinkItem from "./LinkItem";
import ActButton from "./ActButton";
import ModalContainer from "./containers/ModalContainer";
import { useState } from "react";

const StyledNav = styled.div`
  height: 100vh;
  border-right: 1px solid var(--grey3);
  padding: 20px;

  & .nav {
    width: 178px;
  }

  & .logout {
    margin-top: auto;
  }
`;

function NavBar() {
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);

  const handleTweetModalClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  }
  return (
    <StyledNav className="col-3 d-flex flex-column align-items-end">
      {isTweetModalShow ? <ModalContainer value="推文" /> : ""}
      <div className="nav d-flex flex-column flex-grow-1 ">
        <Logo />
        <div className="navLinks d-flex flex-column justify-content-between flex-grow-1">
          <div>
            <LinkItem title="首頁" />
            <LinkItem title="個人資料" />
            <LinkItem title="設定" />
            <ActButton onClick={handleTweetModalClick} buttonName="推文" />
          </div>
          <div className="logout">
            <LinkItem title="登出" className="active" />
          </div>
        </div>
      </div>
    </StyledNav>
  );
}

function AdminNavBar() {
  return (
    <StyledNav className="col-3 d-flex flex-column align-items-end">
      <div className="nav d-flex flex-column flex-grow-1 ">
        <Logo />
        <div className="navLinks d-flex flex-column justify-content-between flex-grow-1">
          <div>
            <LinkItem title={"推文清單"} />
            <LinkItem title={"使用者列表"} />
            <ActButton
              onClick={() => console.log("TweetModal")}
              buttonName={"推文"}
            />
          </div>
          <div className="logout">
            <LinkItem title={"登出"} className="active" />
          </div>
        </div>
      </div>
    </StyledNav>
  );
}

export { NavBar, AdminNavBar };
