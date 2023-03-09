import React from "react";
import { useParams } from "react-router-dom";
import "./ErrorPage.css";
import Header from "../../components/Header/index.jsx";
// import Footer from "../../components/Footer/index.jsx";
function ErrorPage() {
  const { errorCode } = useParams();
  return (
    <>
    <Header/>
     <div className="errorContainer">
        <p className="errorText">Something went wrong!</p>
        {errorCode && <p className="errorText">{`Error code: ${errorCode}`}</p>}
      </div>
       
    </>
  );
}

export default ErrorPage;
