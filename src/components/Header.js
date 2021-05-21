import React from "react";

import { LogoImage } from "./styledComponents/StyledHeader";
import { Logo } from "../assets/images";

/**
 * @author Sebastian Dziechciarz
 */
const Header = () => {
  return <LogoImage src={Logo} alt="Company logo" />;
};

export default Header;
