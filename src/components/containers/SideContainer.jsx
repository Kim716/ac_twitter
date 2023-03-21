import styled from "styled-components";


const StyledDiv = styled.div`
  height: 100vh;
`

function SideContainer({ children }) {
  return (
    <StyledDiv className="col-4">{ children }</StyledDiv>
  )
}

export default SideContainer;