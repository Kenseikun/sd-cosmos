import React from "react";

import { Text } from "./styledComponents/StyledFooter";

/**
 * @author Sebastian Dziechciarz
 */
const Footer = () => {
  return (
    <footer className="row">
      <div className="col-12 d-flex justify-content-between">
        <Text>Copyright © Usertive & SpaceX API</Text>
        <Text>Recruiment Task / Summer 2021</Text>
      </div>
    </footer>
  );
};

export default Footer;
