import React from "react";

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

const Tail = ({ children, image, category }) => {
  return <TailButton onClick={console.log(category)} style={{ backgroundImage: `url(${image})` }}>{children}</TailButton>;
};

export default Tail;
