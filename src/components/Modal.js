import React, { useContext, useRef } from "react";
import RootContext from "../context";

import {
  Background,
  ModalWrapper,
  ModalHeader,
  HeaderTitle,
  CloseButton,
  ModalFilters,
  ModalContent,
  Spinner,
} from "./styledComponents/StyledModal";
import { Close, FilterArrow } from "../assets/icons";
import { categoriesNames } from "../helpers/categoriesArray";

/**
 * @author Sebastian Dziechciarz
 */
const Modal = () => {
  const context = useContext(RootContext);
  const { category, initialSpaceX, isDataLoading, showModal, setShowModal, imgRef, sortAlphabetically } = context;

  const modalRef = useRef();

  const _renderTypeAndStatus = (space) => {
    const { active, agency, name, status, type, version } = space;

    switch (category) {
      case categoriesNames.capsules:
        return (
          <>
            <p>{type}</p>
            <p>{status}</p>
          </>
        );

      case categoriesNames.crew:
        return (
          <>
            <p>{agency}</p>
            <p>{status}</p>
          </>
        );

      case categoriesNames.rockets:
        return (
          <>
            <p>{name}</p>
            <p>{`${active}`}</p>
          </>
        );

      case categoriesNames.starlink:
        return (
          <>
            <p>{version}</p>
            <p>{version}</p>
          </>
        );

      default:
        return (
          <>
            <p>{type}</p>
            <p>{status}</p>
          </>
        );
    }
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <ModalHeader>
              <HeaderTitle>{category}</HeaderTitle>
              <CloseButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)}>
                <img src={Close} alt="Close button" />
              </CloseButton>
            </ModalHeader>

            <ModalFilters>
              <button onClick={sortAlphabetically}>
                Type
                <img ref={imgRef} src={FilterArrow} alt="Filter icon" />
              </button>

              <div>Status</div>
            </ModalFilters>

            <ModalContent>
              <>
                {isDataLoading ? (
                  <Spinner color="secondary" />
                ) : (
                  <>
                    {initialSpaceX.map((space) => {
                      return (
                        <div className="modal_data" key={space.id}>
                          {_renderTypeAndStatus(space)}
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
