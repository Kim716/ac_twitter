import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  border-right: 1px solid var(--grey3);
  padding: 20px 20px 20px 130px;
`;

function NavContainer({ children }) {
  return <StyledDiv className="col-3">{children}</StyledDiv>;
}

export default NavContainer;
