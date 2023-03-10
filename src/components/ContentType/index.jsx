import React, { useEffect, useState } from "react";
import "./ContentType.css";
import PopUp from "../PopUp/index.jsx";
import Fields from "../Fields/index.jsx";
import makeRequest from "../../utils/makeRequest";
import SearchIcon from "../../assets/icon-search-dark_2023-03-09/icon-search-dark.png";
function ContentType() {
  const [isPopup, getPopup] = React.useState(false);
  const [contentType, setcontentType] = React.useState([]);
  const [isClicked, getClicked] = React.useState(false);
  const myDivRef=React.useRef(null);
  useEffect(() => {
    makeRequest("GET", "http://localhost:5001/content")
      .then((response) => {
        setcontentType(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // console.log("contentType");
  // console.log(contentType);

  const handleClick = () => {
    getPopup(true);
  };
  const handleClickField = (id) => {
    getClicked(true);

  };
const handleContent=()=>{
  // const content = document.getElementById("p_tag");
  // console.log("content");
  // console.log(content);
  
  }

  return (
    <div className="content_body">
      <div className="content_header">
        <h1>CONTENT TYPES</h1>
      </div>
      <div className="content_body_options">
        <div className="content_body_left">
          <div className="content_body_count">
            <p>{contentType.length} types</p>
            <img src={SearchIcon}></img>
          </div>
          <div className="content_type">
            <div className="button_content">
              <button className="new_type_button" onClick={handleClick}>
                + New Type
              </button>
              {isPopup && <PopUp getPopup={getPopup} />}
            </div>
            <div className="content_type_list">
              {contentType.map((item, idx) => {
                return (
                  <div
                    className="content_type_list_item"
                    onClick={handleClickField}
                  >
                    <div className="content_type_list_data" ref={myDivRef} onClick={handleContent}>
                      <p >{item.content_type_name}</p>
                      <p className="count_content">{idx + 1}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="content_body_right">
          {/* {
            isClicked
              contentType.map((item, idx) => {
                <Fields id={item.content_type_id} />
              
          } */}
          {isClicked && <Fields  />}
        </div>
      </div>
    </div>
  );
}

export default ContentType;
