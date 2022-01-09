import React from "react";
import "./RdNavbar.css";
import BrandLogo from "./BrandLogo";
import NavbarNav from "./NavbarNav";
const Navbar = () => {
  return (
    <>
      {/* RD Navbar */}
      <div className='rd-navbar-wrap' style={{ height: "106px" }}>
        <nav
          className='rd-navbar rd-navbar-classNameic rd-navbar-original rd-navbar-static'
          data-layout='rd-navbar-fixed'
          data-sm-layout='rd-navbar-fixed'
          data-md-layout='rd-navbar-fixed'
          data-md-device-layout='rd-navbar-fixed'
          data-lg-layout='rd-navbar-static'
          data-lg-device-layout='rd-navbar-fixed'
          data-xl-layout='rd-navbar-static'
          data-xl-device-layout='rd-navbar-static'
          data-xxl-layout='rd-navbar-static'
          data-xxl-device-layout='rd-navbar-static'
          data-lg-stick-up-offset='100px'
          data-xl-stick-up-offset='100px'
          data-xxl-stick-up-offset='100px'
          data-lg-stick-up='true'
          data-xl-stick-up='true'
          data-xxl-stick-up='true'
        >
          <div className='rd-navbar-main-outer'>
            <div className='rd-navbar-main'>
              {/* RD Navbar Panel */}
              <div className='rd-navbar-panel'>
                {/* RD Navbar Toggle */}
                <button
                  className='rd-navbar-toggle toggle-original'
                  data-rd-navbar-toggle='.rd-navbar-nav-wrap'
                >
                  <span></span>
                </button>
                {/* RD Navbar Brand */}
                <div className='rd-navbar-brand'>
                  {/* Brand */}
                  <BrandLogo />
                </div>
              </div>
              <div className='rd-navbar-nav-wrap toggle-original-elements'>
                {/* RD Navbar Nav */}
                <NavbarNav />
              </div>
              <div className='rd-navbar-main-element'>
                {/* RD Navbar Search */}
                <div className='rd-navbar-search rd-navbar-search-2 toggle-original-elements'>
                  <button
                    className='rd-navbar-search-toggle rd-navbar-fixed-element-3 toggle-original'
                    data-rd-navbar-toggle='.rd-navbar-search'
                  >
                    <span></span>
                  </button>
                  <form
                    className='rd-search'
                    action='search-results.html'
                    data-search-live='rd-search-results-live'
                    method='GET'
                  >
                    <div className='form-wrap'>
                      <label
                        className='form-label rd-input-label'
                        htmlFor='rd-navbar-search-form-input'
                      >
                        Search...
                      </label>
                      <input
                        className='rd-navbar-search-form-input form-input'
                        id='rd-navbar-search-form-input'
                        type='text'
                        name='s'
                        autoComplete='off'
                      />
                      <div
                        className='rd-search-results-live'
                        id='rd-search-results-live'
                      ></div>
                      <button
                        className='rd-search-form-submit fl-bigmug-line-search74'
                        type='submit'
                      ></button>
                    </div>
                  </form>
                </div>
                {/* RD Navbar Basket */}
                <div className='rd-navbar-basket-wrap'>
                  <button
                    className='rd-navbar-basket fl-bigmug-line-shopping202 toggle-original'
                    data-rd-navbar-toggle='.cart-inline'
                  >
                    <span>2</span>
                  </button>
                  <div className='cart-inline toggle-original-elements'>
                    <div className='cart-inline-header'>
                      <h5 className='cart-inline-title'>
                        In cart:<span> 2</span> Products
                      </h5>
                      <h6 className='cart-inline-title'>
                        Total price:<span> $37</span>
                      </h6>
                    </div>
                    <div className='cart-inline-body'>
                      <div className='cart-inline-item'>
                        <div className='unit unit-spacing-sm align-items-center'>
                          <div className='unit-left'>
                            <a
                              className='cart-inline-figure'
                              href='single-product.html'
                            >
                              <img
                                src='images/product-mini-6-100x90.png'
                                alt=''
                                width='100'
                                height='90'
                              />
                            </a>
                          </div>
                          <div className='unit-body'>
                            <h6 className='cart-inline-name'>
                              <a href='single-product.html'>WHITE CLUB CHAIR</a>
                            </h6>
                            <div>
                              <div className='group-xs group-middle'>
                                <div className='table-cart-stepper'>
                                  <div className='stepper '>
                                    <input
                                      className='form-input stepper-input'
                                      type='number'
                                      data-zeros='true'
                                      defaultValue='1'
                                      min='1'
                                      max='1000'
                                    />
                                    <span className='stepper-arrow up'></span>
                                    <span className='stepper-arrow down'></span>
                                  </div>
                                </div>
                                <h6 className='cart-inline-title'>$20.00</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='cart-inline-item'>
                        <div className='unit unit-spacing-sm align-items-center'>
                          <div className='unit-left'>
                            <a
                              className='cart-inline-figure'
                              href='single-product.html'
                            >
                              <img
                                src='images/product-mini-7-100x90.png'
                                alt=''
                                width='100'
                                height='90'
                              />
                            </a>
                          </div>
                          <div className='unit-body'>
                            <h6 className='cart-inline-name'>
                              <a href='single-product.html'>PENDANT LAMP</a>
                            </h6>
                            <div>
                              <div className='group-xs group-middle'>
                                <div className='table-cart-stepper'>
                                  <div className='stepper '>
                                    <input
                                      className='form-input stepper-input'
                                      type='number'
                                      data-zeros='true'
                                      defaultValue='1'
                                      min='1'
                                      max='1000'
                                    />
                                    <span className='stepper-arrow up'></span>
                                    <span className='stepper-arrow down'></span>
                                  </div>
                                </div>
                                <h6 className='cart-inline-title'>$17.00</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='cart-inline-footer'>
                      <div className='group-sm'>
                        <a
                          className='btn btn-default-outline-2 btn-zakaria'
                          href='cart-page.html'
                        >
                          Go to cart
                        </a>
                        <a
                          className='btn btn-primary btn-zakaria'
                          href='checkout.html'
                        >
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className='rd-navbar-basket rd-navbar-basket-mobile fl-bigmug-line-shopping202 rd-navbar-fixed-element-2'
                  href='cart-page.html'
                >
                  <span>2</span>
                </a>
                <button
                  className='rd-navbar-project-hamburger rd-navbar-project-hamburger-open rd-navbar-fixed-element-1'
                  data-multitoggle='.rd-navbar-main'
                  data-multitoggle-blur='.rd-navbar-wrap'
                  data-multitoggle-isolate='data-multitoggle-isolate'
                >
                  <span className='project-hamburger'>
                    <span className='project-hamburger-line'></span>
                    <span className='project-hamburger-line'></span>
                    <span className='project-hamburger-line'></span>
                    <span className='project-hamburger-line'></span>
                  </span>
                </button>
              </div>
              <div className='rd-navbar-project'>
                <div className='rd-navbar-project-header'>
                  <button
                    className='rd-navbar-project-hamburger rd-navbar-project-hamburger-close'
                    data-multitoggle='.rd-navbar-main'
                    data-multitoggle-blur='.rd-navbar-wrap'
                    data-multitoggle-isolate=''
                  >
                    <span className='project-close'>
                      <span></span>
                      <span></span>
                    </span>
                  </button>
                  <h5 className='rd-navbar-project-title'>Our Contacts</h5>
                </div>
                <div className='rd-navbar-project-content'>
                  <div>
                    <div>
                      {/* <Owl Carousel */}
                      <div
                        className='owl-carousel owl-loaded owl-drag'
                        data-items='1'
                        data-dots='true'
                        data-autoplay='true'
                      >
                        <div className='owl-stage-outer'>
                          <div
                            className='owl-stage'
                            style={{
                              transform: "translate3d(-666px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: "2333px",
                            }}
                          >
                            <div
                              className='owl-item cloned'
                              style={{ width: "333.2px" }}
                            >
                              <img
                                src='images/about-6-350x269.jpg'
                                alt=''
                                width='350'
                                height='269'
                              />
                            </div>
                            <div
                              className='owl-item cloned'
                              style={{ width: "333.2px" }}
                            >
                              <img
                                src='images/about-7-350x269.jpg'
                                alt=''
                                width='350'
                                height='269'
                              />
                            </div>
                            <div
                              className='owl-item active'
                              style={{ width: "333.2px" }}
                            >
                              <img
                                src='images/about-5-350x269.jpg'
                                alt=''
                                width='350'
                                height='269'
                              />
                            </div>
                            <div
                              className='owl-item'
                              style={{ width: "333.2px" }}
                            >
                              <img
                                src='images/about-6-350x269.jpg'
                                alt=''
                                width='350'
                                height='269'
                              />
                            </div>
                            <div
                              className='owl-item'
                              style={{ width: "333.2px" }}
                            >
                              <img
                                src='images/about-7-350x269.jpg'
                                alt=''
                                width='350'
                                height='269'
                              />
                            </div>
                            <div
                              className='owl-item cloned'
                              style={{ width: "333.2px" }}
                            >
                              <img
                                src='images/about-5-350x269.jpg'
                                alt=''
                                width='350'
                                height='269'
                              />
                            </div>
                            <div
                              className='owl-item cloned'
                              style={{ width: "333.2px" }}
                            >
                              <img
                                src='images/about-6-350x269.jpg'
                                alt=''
                                width='350'
                                height='269'
                              />
                            </div>
                          </div>
                        </div>
                        <div className='owl-nav disabled'>
                          <button
                            role='presentation'
                            className='owl-prev'
                          ></button>
                          <button
                            role='presentation'
                            className='owl-next'
                          ></button>
                        </div>
                        <div className='owl-dots'>
                          <button role='button' className='owl-dot active'>
                            <span></span>
                          </button>
                          <button role='button' className='owl-dot'>
                            <span></span>
                          </button>
                          <button role='button' className='owl-dot'>
                            <span></span>
                          </button>
                        </div>
                      </div>
                      <ul className='contacts-modern'>
                        <li>
                          <a href='tel:#'>
                            523 Sylvan Ave, 5th Floor
                            <br />
                            Mountain View, CA 94041 USA
                          </a>
                        </li>
                        <li>
                          <a href='tel:#'>+1 (844) 123 456 78</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className='list-inline list-social list-inline-xl'>
                        <li>
                          <a className='icon mdi mdi-facebook' href='tel:#'>
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a className='icon mdi mdi-twitter' href='tel:#'>
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a className='icon mdi mdi-instagram' href='tel:#'>
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a className='icon mdi mdi-google-plus' href='tel:#'>
                            Google+
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
