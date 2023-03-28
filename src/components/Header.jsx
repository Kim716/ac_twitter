import styled from "styled-components";
import { ReactComponent as BackIcon } from "assets/icons/back_unfocus.svg";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
  display: flex;
  height: 75px;
  padding: 24px;
  border-bottom: 1px solid #e6ecf0;

  svg {
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      path {
        fill: var(--brand-color);
      }
    }
  }

  h1 {
    color: var(--grey9);
    font-weight: 700;
    font-size: 24px;
  }

  span {
    margin-top: 5px;
    color: var(--secondary);
    font-size: 13px;
  }
`;

function Header({ backIcon, children }) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      {backIcon ? (
        <BackIcon
          onClick={() => {
            navigate(-1);
          }}
        />
      ) : (
        false
      )}
      <div className="d-flex flex-column">
        {children}
      </div>
    </StyledHeader>
  );
}

export default Header;
