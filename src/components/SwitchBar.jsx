import { useState } from "react";
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  border-bottom: 1px solid #e6ecf0;

  h1 {
    cursor: pointer;
  }

  div {
    width: 130px;
    height: 100%;

    & h1 {
      text-align: center;
      line-height: 50px;
    }
  }

  // 互動效果
  .active {
    border-bottom: 2px solid var(--brand-color);
    color: var(--brand-color);
  }
`;

function UserPageSwitchBar() {
  const [isPageShow, setIsPageShow] = useState(0);

  const handlePageChange = (tab) => {
    setIsPageShow(tab);
  };

  return (
    <StyledDiv className="d-flex">
      <div
        className={isPageShow === 0 ? "active" : ""}
        onClick={() => handlePageChange(0)}
      >
        <h1>推文</h1>
      </div>
      <div
        className={isPageShow === 1 ? "active" : ""}
        onClick={() => handlePageChange(1)}
      >
        <h1>回覆</h1>
      </div>
      <div
        className={isPageShow === 2 ? "active" : ""}
        onClick={() => handlePageChange(2)}
      >
        <h1>喜歡的內容</h1>
      </div>
    </StyledDiv>
  );
}

function FollowPageSwitchBar() {
  const [isPageShow, setIsPageShow] = useState(0);

  const handlePageChange = (tab) => {
    setIsPageShow(tab);
  };

  return (
    <StyledDiv className="d-flex">
      <div
        className={isPageShow === 0 ? "active" : ""}
        onClick={() => handlePageChange(0)}
      >
        <h1>追隨者</h1>
      </div>
      <div
        className={isPageShow === 1 ? "active" : ""}
        onClick={() => handlePageChange(1)}
      >
        <h1>正在追隨</h1>
      </div>
    </StyledDiv>
  );
}

function SwitchBar({ value }) {
  if (value === "info") {
    return <UserPageSwitchBar />;
  }
  if (value === "follow") {
    return <FollowPageSwitchBar />;
  }
}

export default SwitchBar;