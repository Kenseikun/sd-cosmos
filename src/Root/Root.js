import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "../components/Categories";
import RootContext from "../context";

import { Capsules, Crew, Details, Rockets } from "../assets/images/categories";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Rocket from "../components/Rocket";

const Root = () => {
  const [categories, setCategories] = useState([
    { name: "Capsules", image: `${Capsules}` },
    { name: "Crew", image: `${Crew}` },
    { name: "Rocktes", image: `${Details}` },
    { name: "Details", image: `${Rockets}` },
  ]);

  const [category, setCategory] = useState("capsules");

  const [initialSpaceX, setInitialSpaceX] = useState([]);
  const [isAnimate, setIsAnimate] = useState(false);

  const rocketAnimate = () => {
    setIsAnimate(true);
    setInterval(() => {
      setIsAnimate(false);
    }, 2000);
  };

  const getSpaceX = () => {
    axios
      .get(`https://api.spacexdata.com/v4/${category}`)
      .then((response) => {
        console.log(response);
        setInitialSpaceX(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSpaceX();
  }, [category]);

  return (
    <RootContext.Provider value={{ categories, rocketAnimate, isAnimate, setCategory }}>
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
      </div>
    </RootContext.Provider>
  );
};

export default Root;
