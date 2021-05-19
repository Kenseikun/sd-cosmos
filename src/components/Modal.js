import React, { useContext } from "react";
import RootContext from "../context";
import styled from "styled-components";

import { Close, FilterArrow } from "../assets/icons";

const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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

  background: linear-gradient(360deg, rgba(43, 34, 74, 0.8) 0%, #2b224a 5%);
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

const ModalFilters = styled.div`
  display: flex;

  button,
  div {
    display: flex;
    flex-grow: 1;
    align-items: center;

    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    color: #a094c6;
  }

  button {
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.background};
    justify-content: space-between;
    align-items: center;
    transition: 0.2s;

    &:hover {
      background-color: #322855;
    }
  }

  div {
    background-color: #322855;
    border-radius: 0 4px 4px 0;

    /* TODO: align center */
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 16px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #51457c;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #51457c;
  }
  ::-webkit-scrollbar-track {
    background: #20193a;
    border-radius: 10px;
    box-shadow: inset 7px 30px 12px #20193a;
  }

  .modal_data {
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
      margin-left: 10px;
    }
  }
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
  const { showModal, setShowModal, initialSpaceX, isDataLoading } = context;
  // TODO: is data loading
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

            <ModalFilters>
              <button>
                Type
                <img src={FilterArrow} alt="Filter icon" />
              </button>

              <div>Status</div>
            </ModalFilters>

            <ModalContent>
              {initialSpaceX.map((space) => {
                return (
                    <div className="modal_data" key={space.id}>
                      <p>{space.agency}</p>
                      <p>{space.status}</p>

                      {/* TODO: */}
                    {/* <p>{space.type}</p> */}
                    {/* <p>{space.status}</p> */}

                  </div>
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
