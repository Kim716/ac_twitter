import styled from "styled-components";
import { Children } from "react";

// 因為不同Page所需要的高度不同，故需要傳入 height 參數讓此元件知道要固定多高。
// 組裝時可用 background-color: blue; 確認區域大小。

const StyledDiv = styled.div`
  height: ${(props) => props.height};
`

function ListCollection({ height,  Children}) {
  return (
    <StyledDiv className="col-6" height={height}>
      {Children}
    </StyledDiv>
  )
}

export default ListCollection;

