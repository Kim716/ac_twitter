import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: var(--grey2);
  border-bottom: 2px solid #657786;
  margin-bottom: 32px;
  padding-left: 10px;
  border-radius: 2px;

  &:hover,
  &:has(input:focus) {
    border-bottom: 2px solid var(--light-blue);
  }
`;

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  padding: 5px 0 0;
  font-size: 14px;
  color: var(--grey7);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  border: 0;
  padding: 5px 0;

  font-size: 16px;

  ::placeholder {
    color: var(--grey5);
  }

  &:focus {
    outline: none;
  }
`;

function Input({
  id,
  label,
  type,
  placeholder,
  maxLength = "",
  value,
  onChange,
}) {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        required
      />
    </StyledDiv>
  );
}

export default Input;
