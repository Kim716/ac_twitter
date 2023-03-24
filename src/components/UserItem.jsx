import styled from "styled-components";
import Avatar from "assets/images/avatar_default.png";
import StatusButton from "./StatusButton";

const StyledDiv = styled.div`
  padding: 16px 24px;
  border: 1px solid var(--grey3);
  img,
  span,
  p,
  svg {
    cursor: pointer;
  }
  img {
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 8px;
  }
  // 文字區塊的排版
  .text-box {
    .user-name {
      font-weight: bold;
      font-size: 20px;
      margin-right: 5px;
    }
    .content {
      margin-top: 5px;
      overflow-wrap: break-word;
      line-height: 1.6;
    }
  }
`;

function UserItem() {
  return (
    <StyledDiv className="d-flex">
      <img src={Avatar} alt="" />
      <div className="text-box d-flex flex-column flex-wrap">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="user-name">Name</span>
            <span>@apple</span>
          </div>
          <StatusButton defaultName={"跟隨"} clickName={"正在跟隨"} />
        </div>
        {/* 最大顯示字數140字 */}
        <p className="content">
          Forget real people. Real people don’t text you back, they have
          incorrect opinions about the latest episode of Riverdale, and they
          continue u
        </p>
      </div>
    </StyledDiv>
  );
}

export default UserItem;
