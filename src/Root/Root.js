import React, { useState } from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";

import RootContext from "../context";

import { Capsules, Crew, Details, Rockets } from "../assets/images/categories";
import Rocket from "../components/Rocket";

const Root = () => {
  const [categories, setCategories] = useState([
    { name: "Capsules", image: `${Capsules}` },
    { name: "Crew", image: `${Crew}` },
    { name: "Rocktes", image: `${Details}` },
    { name: "Details", image: `${Rockets}` },
  ]);

  return (
    <RootContext.Provider value={{ categories }}>
      <div className="container" style={{ height: "100vh", border: "1px solid red" }}>
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>

        <div className="row justify-content-center" style={{ border: "1px solid green" }}>
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
