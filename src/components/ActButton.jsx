import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 24px;
  width: 100%;
  background: var(--brand-color);
  border: 1px solid var(--brand-color);
  border-radius: 50px;
  font-size: 20px;
  color: var(--white);
  cursor: pointer;

  &:hover {
    color: var(--brand-color);
    background: var(--white);
  }
`;

function Button({ buttonName, onClick }) {
  return <StyledButton onClick={onClick}>{buttonName}</StyledButton>;
}

export default Button;
