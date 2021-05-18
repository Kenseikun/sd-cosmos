import React from "react";
import styled from "styled-components"

const Text = styled.p`
  color: ${({ theme }) => theme.fontColor.light};
  font-weight: 400;
  font-size: 12px;
`;

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
