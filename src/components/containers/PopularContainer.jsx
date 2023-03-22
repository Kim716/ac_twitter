import styled from "styled-components";


const StyledDiv = styled.div`
  width: 273px;
  height: 731px;
  background-color: var(--grey1);
  & div.header {
    padding: 24px;
    border-bottom: 1px solid var(--grey3);
    h1 {
      width: 96px;
      height: 26px;
      font-weight: 700;
      font-size: 24px;
    }
  }
`

function PopularCollection({ children }) {
  return (
    <StyledDiv>
      <div className="header">
        <h1>推薦跟隨</h1>
      </div>
      { children }
    </StyledDiv>
  )
}

export default PopularCollection;