import logo from "../assets/icons/logo.svg";
import styled from "styled-components";

const StyleLogo = styled.img`
  display: block;
  width: 40px;
`;

function Logo() {
  return <StyleLogo src={logo} alt="logo" />;
}

export default Logo;
