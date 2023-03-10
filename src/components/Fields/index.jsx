import React from "react";
import "./Fields.css";
import makeRequest from "../../utils/makeRequest";
import pencilIcon from "../../assets/user-pencil-write-ui-education_2023-03-09/user-pencil-write-ui-education@2x.png";
import editIcon from "../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note@3x.png";
import deleteIcon from "../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste@2x.png";
function Fields({ id }) {
  const [field, setField] = React.useState([]);
  React.useEffect(() => {
    makeRequest("GET", `http://localhost:5001/field/1`)
      .then((response) => {
        setField(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(field);
  return (
    <>
      <div className="field_box">
        <div className="field_box_header">
          <h1>Company_profile</h1>
          <img src={pencilIcon} alt="PencilIcon" className="pencil_icon" />
        </div>
        <p className="field_count">{field.length} Fields</p>
      </div>
      <button className="add_field">+ Add another Field</button>
      <div className="field_content">
        {field.map((item) => {
          return (
            <div className="field_content_box">
              <h2 className="field_name">{item.field_name}</h2>
              <p className="text">text</p>
              <div className="field_content_box_icons">
                <img src={editIcon} alt="edit" className="edit_image" />
                <img src={deleteIcon} alt="delete" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Fields;
