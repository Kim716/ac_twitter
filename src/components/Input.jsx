import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  background-color: var(--grey2);
  border-bottom: 2px solid #657786;
  margin-bottom: 32px;
  padding-left: 10px;
  border-radius: 2px;

  &:hover,
  &:has(input:focus) {
    border-bottom: 2px solid var(--light-blue);
  }

  /* error 時要在 input 加 error 的 className*/
  &:has(input.error) {
    border-bottom: 2px solid var(--error);
  }

  &:has(input.error)::after {
    position: absolute;
    bottom: -20px;

    content: attr(data-content);
    color: var(--error);
    font-size: 12px;
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
  errorMessage,
  isError,
}) {
  return (
    <StyledDiv data-content={isError ? errorMessage : ""}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        className={isError ? "error" : ""}
        id={id}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        // 發現不能寫 require 這樣 submit 會先被擋
      />
    </StyledDiv>
  );
}

export default Input;
