import React, { useContext } from "react";
import RootContext from "../context";
import styled, { keyframes } from "styled-components";

import { Moon, RocketImg, SmokeLeft, SmokeRight, Wings } from "../assets/images/rocket";

const rocketAnimation = keyframes`
 from {
    transform: translateY(0px);
  }

  to {
    transform:  translateY(-1000px);
  }
`;

const RocketContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
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
`;

const RocketDiv = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 444px;
  width: 100%;

  &.animate {
    animation: ${rocketAnimation} 4s ease infinite;
  }

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

/**
 * @author Sebastian Dziechciarz
 */
const Rocket = () => {
  const context = useContext(RootContext);
  const { rocketAnimate, isRocketAnimate } = context;

  return (
    <RocketContainer>
      <DIVWrapper>
        <RocketDiv className={`${isRocketAnimate ? "animate" : ""}`}>
          <img src={RocketImg} alt="Rocket" />
          <img src={Wings} alt="Rocket" />
          <img src={SmokeLeft} alt="Rocket" />
          <img src={SmokeRight} alt="Rocket" />
        </RocketDiv>
      </DIVWrapper>
      <LaunchButton onClick={() => rocketAnimate()}>Launch Rocket!</LaunchButton>
    </RocketContainer>
  );
};

export default Rocket;
