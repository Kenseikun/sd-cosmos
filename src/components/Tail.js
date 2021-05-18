import React from "react";

import styled from "styled-components";

const TailButton = styled.button`
  width: 160px;
  height: 200px;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 32px;
  margin-right: 30px;
`;

const Tail = ({ children, image }) => {
  return <TailButton style={{backgroundImage: image}}>{children}</TailButton>;
};

export default Tail;
