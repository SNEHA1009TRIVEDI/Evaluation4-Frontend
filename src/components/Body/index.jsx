import React from "react";
import "./Body.css";
import ContentType from "../ContentType/index.jsx";
import CollectionType from "../CollectionType/index";
function Body() {
  return (
    <>
      <div className="container">
        <CollectionType />
        <ContentType />
      </div>
    </>
  );
}

export default Body;
