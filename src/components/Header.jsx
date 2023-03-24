import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e6ecf0;

  h1 {
    color: var(--grey9);
    font-weight: 700;
    font-size: 24px;
  }
`;

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
