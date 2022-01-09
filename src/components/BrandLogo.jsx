import React from "react";

const BrandLogo = () => {
  return (
    <>
      <a className='brand' href='index.html'>
        <img
          className='brand-logo-dark'
          src='images/logo-default-210x88.png'
          alt=''
          width='105'
          height='44'
        />
        <img
          className='brand-logo-light'
          src='images/logo-inverse-212x88.png'
          alt=''
          width='106'
          height='44'
        />
      </a>
    </>
  );
};

export default BrandLogo;
