import styled from "styled-components";

export const TailButton = styled.button`
  position: relative;

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
    background-color: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(#eb01a5, #d13531);
  }

  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    font-weight: 600;

    transition: 0.5s;
  }

  &:hover p {
    bottom: 50%;
    left: 50%;
  }
`;
