import styled from "styled-components";

const StyledH1 = styled.h1`
  margin: 30px 0 40px;
  font-weight: 700;
  font-size: 28px;
  color: #1c1c1c;
  text-align: center;
`;

function Title({ children }) {
  return <StyledH1>{children}</StyledH1>;
}
export default Title;
