import React, { useContext } from "react";
import RootContext from "../context";
import Tail from "./Tail";

const Categories = () => {
  const context = useContext(RootContext);

  const { categories } = context;
  return (
    <>
      {categories.map((categorie) => {
        return (
          <Tail image={categorie.image} key={categorie.name}>
            {categorie.name}
          </Tail>
        );
      })}
    </>
  );
};

export default Categories;
