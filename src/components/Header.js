import React from "react";

import styled from "styled-components";

import { Logo } from "../assets/images";

const LogoImage = styled.img`
  margin-top: 36px;
`;

const Header = () => {
  return <LogoImage src={Logo} alt="Company logo" />;
};

export default Header;
