import React from "react";
import "./NotFoundPage.css";
import Header from "../../components/Header/index.jsx";
// import Footer from "../../components/Footer/index.jsx";
function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default NotFoundPage;
