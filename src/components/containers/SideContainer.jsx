import styled from "styled-components";
import { Children } from "react";

const StyledDiv = styled.div`
  height: 100vh;
`

function SideContainer({ Children }) {
  return (
    <StyledDiv className="col-3">{ Children }</StyledDiv>
  )
}

export default SideContainer;