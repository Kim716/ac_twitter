import "./styles/reset.css";
import "./styles/base.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import styled from "styled-components";

const StyledH1 = styled.h1`
  color: var(--brand-color);
`;

function App() {
  return (
    <div>
      <StyledH1>Hello</StyledH1>
    </div>
  );
}

export default App;
