import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
`

function ViewContainer({ children }) {
  return (
    <StyledDiv className="col-8">{ children }</StyledDiv>
  )
}

export default ViewContainer;