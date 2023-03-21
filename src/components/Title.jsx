import styled from "styled-components";

const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  color: #1c1c1c;
`;

function Title({ children }) {
  return <StyledH1>{children}</StyledH1>;
}

export default Title;
