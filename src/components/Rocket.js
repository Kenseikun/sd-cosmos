import React from "react";

import styled, { keyframes } from "styled-components";

import { Moon, RocketImg, SmokeLeft, SmokeRight, Wings } from "../assets/images/rocket";

const imgAnimate = keyframes`
  from {
    transform: translateX(200px) scale(0.2);
    opacity: 0;

  }

  to {
    transform:  translateX(0px) scale(1);
    opacity: 10;

  }
`;

const RocketContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid orange;
  object-fit: cover;
  object-position: center;
`;

const DIVWrapper = styled.div`
  background-image: url(${Moon});
  background-repeat: no-repeat;
  background-position: center;
  width: 375px;
  height: 100%;
  margin-bottom: 24px;

  animation: ${imgAnimate} 1s linear forwards;
`;

const RocketDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  position: relative;
  border: 1px solid red;
  height: 100%;
  width: 100%;

  img {
    position: absolute;
  }

  img:nth-child(1) {
    bottom: 30px;
  }

  img:nth-child(2) {
    bottom: 30px;
  }

  img:nth-child(3) {
    left: 90px;
  }

  img:nth-child(4) {
    right: 120px;
  }
`;

const LaunchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px 32px;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: 0.3s;

  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Rocket = () => {
  return (
    <RocketContainer>
      <DIVWrapper>
        <RocketDiv>
          <img src={RocketImg} alt="Rocket" />
          <img src={Wings} alt="Rocket" />
          <img src={SmokeLeft} alt="Rocket" />
          <img src={SmokeRight} alt="Rocket" />
        </RocketDiv>
      </DIVWrapper>
      <LaunchButton>Launch Rocket!</LaunchButton>
    </RocketContainer>
  );
};

export default Rocket;
