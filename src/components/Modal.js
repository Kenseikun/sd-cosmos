import React, { useContext } from "react";
import RootContext from "../context";
import styled from "styled-components";

import { Close } from "../assets/icons";

const Background = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 540px;
  height: 360px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #000;

  position: relative;
  z-index: 10;
  border-radius: 16px;

  background: #292049;
  padding: 20px 24px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const HeaderTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
`;

const ModalContent = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
`;

/**
 * @author Sebastian Dziechciarz
 */
const Modal = () => {
  const context = useContext(RootContext);
  const { showModal, setShowModal, initialSpaceX } = context;

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>
            <ModalHeader>
              <HeaderTitle>Starlink</HeaderTitle>
              <CloseButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)}>
                <img src={Close} alt="Close button" />
              </CloseButton>
            </ModalHeader>

            <ModalContent>
              <h1>TEST ABC ABC</h1>
              <p>TEST</p>
              {initialSpaceX.map((space) => {
                return (
                  <>
                    <p>{space.agency}</p>
                    <p>{space.serial}</p>
                  </>
                );
              })}
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
