import React, { useContext } from "react";
import RootContext from "../context";
import Tail from "./Tail";

const Categories = () => {
  const context = useContext(RootContext);

  const { categories, setCategory } = context;
  return (
    <>
      {categories.map((category) => {
        return (
          <Tail image={category.image} key={category.name} category="category.name">
            {category.name}
          </Tail>
        );
      })}
    </>
  );
};

export default Categories;
