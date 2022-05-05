import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./Directory.styles.scss";

export default function Directory({ categories = [] }) {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem title={title} imageUrl={imageUrl} key={id} />
      ))}
    </div>
  );
}
