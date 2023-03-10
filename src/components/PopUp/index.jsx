import React, { useState } from "react";
import "./PopUp.css";

const PopUp = ({ getPopup }) => {
  const [contentData, setcontentData] = useState(null);
  const onCancel = () => {
    getPopup(false);
  };
  const handleChange = (e) => {
    setcontentData(e.target.value);

  };
  const contentEntry = async(content_type_name) => {
    // console.log(content_type_name);
    const response = await fetch('http://localhost:5001/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content_type_name: content_type_name,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getPopup(false);

     contentEntry(contentData);
  };

  return (
    <>
      <div className="dark_background" />
      <div className="center_card">
        <div className="popup">
          <div className="popup_header">
            <h5 className="card_heading">Create a new content type</h5>
          </div>
          <div className="popup_content">Name of the content type</div>
          <input
            type="text"
            className="popup_input"
            onChange={(e) => handleChange(e)}
          />
          <div className="popup_actions">
            <div className="actions-container">
              <button className="cancel_btn" onClick={onCancel}>
                Cancel
              </button>
              <button className="create_btn" onClick={onSubmit}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
