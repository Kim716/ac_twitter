import styled from "styled-components";

const StyledHeader = styled.div`
  height: 75px;
  width: 100%;
  padding: 24px;
`

function Header({ children }) {
  return <StyledHeader>{ children }</StyledHeader>
}

export default Header