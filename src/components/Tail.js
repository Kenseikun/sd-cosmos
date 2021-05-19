import React, { useContext } from "react";
import RootContext from "../context";

import styled from "styled-components";

const TailButton = styled.button`
  width: 160px;
  height: 200px;
  border-radius: 16px;

  background-size: cover;
  background-repeat: no-repeat;

  margin-bottom: 32px;
  margin-right: 30px;
  border: none;
  outline: none;
  background-color: black;

  font-weight: 600;

  &:hover {
    color: black;
  }
`;

/**
 * @author Sebastian Dziechciarz
 */
const Tail = ({ children, image }) => {
  const context = useContext(RootContext);
  const { openModal } = context;

  return (
    <TailButton onClick={(e) => openModal(e)} style={{ backgroundImage: `url(${image})` }}>
      {children}
    </TailButton>
  );
};

export default Tail;
