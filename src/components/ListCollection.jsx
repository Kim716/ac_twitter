import styled from "styled-components";

// 因為不同Page所需要的高度不同，故需要傳入 height 參數讓此元件知道要固定多高。
// 組裝時可用 background-color: blue; 確認區域大小。

const StyledDiv = styled.div`
  height: 100vh;
`;

function ListCollection({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ListCollection;
