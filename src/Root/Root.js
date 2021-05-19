import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import RootContext from "../context";

import { Capsules, Crew, Details, Rockets } from "../assets/images/categories";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Rocket from "../components/Rocket";

/**
 * @author Sebastian Dziechciarz
 */
const Root = () => {
  const [categories, setCategories] = useState([
    { name: "Capsules", image: `${Capsules}` },
    { name: "Crew", image: `${Crew}` },
    { name: "Rockets", image: `${Details}` },
    { name: "Starlink", image: `${Rockets}` },
  ]);

  const [category, setCategory] = useState("rockets");
  const [initialSpaceX, setInitialSpaceX] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isRocketAnimate, setIsRocketAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
    setInterval(() => {
      setIsRocketAnimate(false);
    }, 2000);
  };

  return (
    <RootContext.Provider
      value={{
        category,
        categories,
        initialSpaceX,
        isDataLoading,
        openModal,
        rocketAnimate,
        setShowModal,
        showModal,
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
