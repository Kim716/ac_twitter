import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
`;

function ListCollection({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ListCollection;
