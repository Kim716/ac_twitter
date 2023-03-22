import styled from "styled-components";


const StyledDiv = styled.div`
  height: 100vh;
  border-left: 1px solid var(--grey3);
  padding: 16px 0 0 24px;
`

function SideContainer({ children }) {
  return (
    <StyledDiv className="col-4">{ children }</StyledDiv>
  )
}

export default SideContainer;