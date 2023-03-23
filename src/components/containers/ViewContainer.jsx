import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  overflow: auto;
`

function ViewContainer({ children }) {
  return (
    <StyledDiv className="col-8 d-flex flex-column">{ children }</StyledDiv>
  )
}

export default ViewContainer;