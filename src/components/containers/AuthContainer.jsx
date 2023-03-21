import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 50px auto;
  width: 400px;
  padding: 20px;
`;

function AuthContainer({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default AuthContainer;
