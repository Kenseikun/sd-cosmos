import React, { useContext } from "react";
import RootContext from "../context";

import { TailButton } from "./styledComponents/StyledTail";

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
