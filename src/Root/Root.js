import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import RootContext from "../context";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Rocket from "../components/Rocket";
import { categoriesArray, categoriesNames } from "../helpers/categoriesArray";

import { DownArrow, UpArrow } from "../assets/icons";
/**
 * @author Sebastian Dziechciarz
 */
const Root = () => {
  const [categories, setCategories] = useState([...categoriesArray]);

  const [category, setCategory] = useState("crew");
  const [initialSpaceX, setInitialSpaceX] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isRocketAnimate, setIsRocketAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reverseSorting, setReversSorting] = useState(false);

  /**
   * Getting data from `SpaceX` API with dynamic `category`
   * useEffect works after `category` state change.
   */
  useEffect(() => {
    setIsDataLoading(true);
    axios
      .get(`https://api.spacexdata.com/v4/${category}`)
      .then((response) => {
        setInitialSpaceX(response.data);
        setIsDataLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  /**
   * Setup category state for download API with new datas.
   * Showing <Modal> component with this data.
   */
  const openModal = (e) => {
    const category = e.target.innerText.toLowerCase();
    setCategory(category);
    setShowModal((prev) => !prev);
  };

  /**
   * Start rocket animation and setup interval for disabled <button>.
   * Animation time should be the same as interval.
   */
  const rocketAnimate = () => {
    setIsRocketAnimate(true);
    setTimeout(() => {
      setIsRocketAnimate(false);
    }, 3000);
  };

  const imgRef = useRef();

  const sortAlphabetically = () => {
    if (category === categoriesNames.crew) {
      let sortedInitialSpaceX;
      if (reverseSorting) {
        sortedInitialSpaceX = initialSpaceX.sort((a, b) => b.agency.localeCompare(a.agency));
        setReversSorting(false);
        imgRef.current.src = DownArrow;
      } else {
        sortedInitialSpaceX = initialSpaceX.sort((a, b) => a.agency.localeCompare(b.agency));
        setReversSorting(true);
        imgRef.current.src = UpArrow;
      }

      setInitialSpaceX([...sortedInitialSpaceX]);
    } else if (category === categoriesNames.starlink) {
      let sortedInitialSpaceX;
      if (reverseSorting) {
        sortedInitialSpaceX = initialSpaceX.sort((a, b) => b.version.localeCompare(a.version));
        setReversSorting(false);
        imgRef.current.src = DownArrow;
      } else {
        sortedInitialSpaceX = initialSpaceX.sort((a, b) => a.version.localeCompare(b.version));
        setReversSorting(true);
        imgRef.current.src = UpArrow;
      }

      setInitialSpaceX([...sortedInitialSpaceX]);
    } else if (category === categoriesNames.rockets) {
      let sortedInitialSpaceX;
      if (reverseSorting) {
        sortedInitialSpaceX = initialSpaceX.sort((a, b) => b.name.localeCompare(a.name));
        setReversSorting(false);
        imgRef.current.src = DownArrow;
      } else {
        sortedInitialSpaceX = initialSpaceX.sort((a, b) => a.name.localeCompare(b.name));
        setReversSorting(true);
        imgRef.current.src = UpArrow;
      }

      setInitialSpaceX([...sortedInitialSpaceX]);
    } else {
      let sortedInitialSpaceX;
      if (reverseSorting) {
        sortedInitialSpaceX = initialSpaceX.sort((a, b) => b.type.localeCompare(a.type));
        setReversSorting(false);
        imgRef.current.src = DownArrow;
      } else {
        sortedInitialSpaceX = initialSpaceX.sort((a, b) => a.type.localeCompare(b.type));
        setReversSorting(true);
        imgRef.current.src = UpArrow;
      }

      setInitialSpaceX([...sortedInitialSpaceX]);
    }
  };

  return (
    <RootContext.Provider
      value={{
        category,
        categories,
        initialSpaceX,
        isDataLoading,
        isRocketAnimate,
        openModal,
        rocketAnimate,
        setShowModal,
        showModal,
        sortAlphabetically,
        imgRef,
      }}
    >
      <div className="container d-flex flex-column" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>

        <div className="row justify-content-center align-items-center flex-grow-1">
          <div className="col-5">
            <Categories />
          </div>

          <div className="col-5">
            <Rocket />
          </div>
        </div>

        <Footer />

        <Modal />
      </div>
    </RootContext.Provider>
  );
};

export default Root;
