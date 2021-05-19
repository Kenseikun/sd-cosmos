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
      {categories.map(({ name, image }) => {
        return (
          <Tail image={image} key={name}>
            {name}
          </Tail>
        );
      })}
    </>
  );
};

export default Categories;
