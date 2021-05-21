import React, { useContext } from "react";
import RootContext from "../context";

import { RocketImg, SmokeLeft, SmokeRight, Wings } from "../assets/images/rocket";
import { DIVWrapper, LaunchButton, RocketContainer, RocketDiv } from "./styledComponents/StyledRocket";

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
          <img src={SmokeLeft} alt="Rocket" className={`${isRocketAnimate ? "start" : ""}`} />
          <img src={SmokeRight} alt="Rocket" className={`${isRocketAnimate ? "start" : ""}`} />
        </RocketDiv>
      </DIVWrapper>
      <LaunchButton onClick={() => rocketAnimate()} disabled={isRocketAnimate ? true : false}>
        Launch Rocket!
      </LaunchButton>
    </RocketContainer>
  );
};

export default Rocket;
