import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import RootContext from "../context";

import { Capsules, Crew, Details, Rockets } from "../assets/images/categories";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Rocket from "../components/Rocket";
import Modal from "../components/Modal";

const Root = () => {
  const [categories, setCategories] = useState([
    { name: "Capsules", image: `${Capsules}` },
    { name: "Crew", image: `${Crew}` },
    { name: "Rockets", image: `${Details}` },
    { name: "Starlink", image: `${Rockets}` },
  ]);

  const [category, setCategory] = useState("rockets");

  const [initialSpaceX, setInitialSpaceX] = useState([]);
  const [isAnimate, setIsAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const rocketAnimate = () => {
    setIsAnimate(true);
    setInterval(() => {
      setIsAnimate(false);
    }, 2000);
  };

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/${category}`)
      .then((response) => {
        console.log(response);
        setInitialSpaceX(response.data);
      })
      .catch((error) => console.log(error));
  }, [category]);

  const openModal = (e) => {
    const category = e.target.innerText.toLowerCase();
    setCategory(category);
    setShowModal((prev) => !prev);
  };

  return (
    <RootContext.Provider
      value={{ category, categories, rocketAnimate, openModal, showModal, setShowModal, initialSpaceX }}
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
