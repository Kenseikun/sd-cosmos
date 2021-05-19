import React, { useContext } from "react";
import RootContext from "../context";

import Tail from "./Tail";

/**
 * @author Sebastian Dziechciarz
 */
const Categories = () => {
  const context = useContext(RootContext);
  const { categories } = context;

  return (
    <>
      {categories.map((category) => {
        return (
          <Tail image={category.image} key={category.name}>
            {category.name}
          </Tail>
        );
      })}
    </>
  );
};

export default Categories;
