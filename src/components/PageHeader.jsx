import React from "react";
// import Preloader from "./Preloader";
import Navbar from "./Navbar";
// component to present page header
const PageHeader = () => {
  return (
    <>
      {/* <Preloader /> */}
      <header className='section page-header here'>
        {/* Page Navbar */}
        <Navbar />
      </header>
    </>
  );
};

export default PageHeader;
