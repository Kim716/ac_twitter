import styled from "styled-components";
import { Children } from "react";

const StyledDiv = styled.div`
  height: 100vh;
`

function ViewContainer({ Children }) {
  return (
    <StyledDiv className="col-6">{ Children }</StyledDiv>
  )
}

export default ViewContainer;