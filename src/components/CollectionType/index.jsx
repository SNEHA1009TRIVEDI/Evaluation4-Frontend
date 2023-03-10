import React, { useState, useEffect } from "react";
import "./CollectionType.css";
import SearchIcon from "../../assets/icon-search-dark_2023-03-09/icon-search-dark.png";
import makeRequest from "../../utils/makeRequest";
function CollectionType() {
  const [collectionTypes, setCollectionTypes] = useState(null);

  useEffect(() => {
    makeRequest("GET", "http://localhost:5001/content")
      .then((response) => {
        setCollectionTypes(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="collection_body">
      <div className="collection_heading">
        <h1>CMS+</h1>
      </div>
      <div className="collection_body_content">
        <div className="collection_body_header">
          <h3>COLLECTION TYPES</h3>
          <span className="search-icon">
            <img src={SearchIcon}></img>
          </span>
        </div>
        <div className="collection_body_content">
          {collectionTypes &&
            collectionTypes.map((collectionType) => (
              <ul className="ul">
                <li className="collection_name">
                  {collectionType.content_type_name}
                </li>
              </ul>
            ))}
        </div>
      </div>
      <div className="collection_footer">
        <div className="collection_footer_content">CONTENT TYPE BUILDER</div>
      </div>
    </div>
  );
}

export default CollectionType;
