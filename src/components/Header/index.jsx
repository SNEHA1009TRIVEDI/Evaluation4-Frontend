import React from "react";
import { useParams } from "react-router-dom";
import "./Header.css";
function Header() {
  const { errorCode } = useParams();
  return (
    <>
     <header className="header">
        <div className="header_left">
            <h1>CMS+</h1>
        </div>
        <div className="header_right">
            <h1>Content_type</h1>
        </div>
    </header>
    </>
  );
}

export default Header;
