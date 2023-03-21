import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
`;

function MainContainer({ children }) {
  return <StyledDiv className="col-9">{children}</StyledDiv>;
}

export default MainContainer;
