import React from "react";

const NavbarNav = () => {
  return (
    <>
      <ul className='rd-navbar-nav'>
        <li className='rd-nav-item active'>
          <a className='rd-nav-link' href='index.html'>
            Home
          </a>
        </li>
        <li className='rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu'>
          <a className='rd-nav-link' href='tel:#'>
            Pages
          </a>
          <span className='rd-navbar-submenu-toggle'></span>
          {/* RD Navbar Dropdown */}
          <ul className='rd-menu rd-navbar-dropdown'>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='about-us.html'>
                About Us
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='what-we-offer.html'>
                What We Offer
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='our-team.html'>
                Our Team
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='testimonials.html'>
                Testimonials
              </a>
            </li>
          </ul>
        </li>
        <li className='rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu'>
          <a className='rd-nav-link' href='grid-blog.html'>
            Blog
          </a>
          <span className='rd-navbar-submenu-toggle'></span>
          {/* RD Navbar Dropdown */}
          <ul className='rd-menu rd-navbar-dropdown'>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='grid-blog.html'>
                Grid Blog
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='blog-list.html'>
                Blog List
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='blog-post.html'>
                Blog Post
              </a>
            </li>
          </ul>
        </li>
        <li className='rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu'>
          <a className='rd-nav-link' href='grid-gallery.html'>
            Gallery
          </a>
          <span className='rd-navbar-submenu-toggle'></span>
          {/* RD Navbar Dropdown */}
          <ul className='rd-menu rd-navbar-dropdown'>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='grid-gallery.html'>
                Grid Gallery
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a
                className='rd-dropdown-link'
                href='grid-fullwidth-gallery.html'
              >
                Grid Fullwidth Gallery
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='masonry-gallery.html'>
                Masonry Gallery
              </a>
            </li>
          </ul>
        </li>
        <li className='rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu'>
          <a className='rd-nav-link' href='tel:#'>
            Elements
          </a>
          <span className='rd-navbar-submenu-toggle'></span>
          {/* RD Navbar Megamenu */}
          <ul className='rd-menu rd-navbar-megamenu rd-navbar-open-right'>
            <li className='rd-megamenu-item'>
              <div className='rd-megamenu-title'>
                <span className='rd-megamenu-icon mdi mdi-apps'></span>
                <span className='rd-megamenu-text'>Elements</span>
              </div>
              <ul className='rd-megamenu-list rd-megamenu-list-2'>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='typography.html'>
                    Typography
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='icon-lists.html'>
                    Icon lists
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a
                    className='rd-megamenu-list-link'
                    href='progress-bars.html'
                  >
                    Progress bars
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a
                    className='rd-megamenu-list-link'
                    href='calls-to-action.html'
                  >
                    Calls to action
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a
                    className='rd-megamenu-list-link'
                    href='tabs-and-accordions.html'
                  >
                    Tabs &amp; accordions
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='buttons.html'>
                    Buttons
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='tables.html'>
                    Tables
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='forms.html'>
                    Forms
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='counters.html'>
                    Counters
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='grid-system.html'>
                    Grid system
                  </a>
                </li>
              </ul>
            </li>
            <li className='rd-megamenu-item flex-grow-1 flex-shrink-0'>
              <div className='rd-megamenu-title'>
                <span className='rd-megamenu-icon mdi mdi-layers'></span>
                <span className='rd-megamenu-text'>Additional pages</span>
              </div>
              <ul className='rd-megamenu-list'>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='404-page.html'>
                    404 Page
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='coming-soon.html'>
                    Coming Soon
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a className='rd-megamenu-list-link' href='contact-us.html'>
                    Contact Us
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a
                    className='rd-megamenu-list-link'
                    href='privacy-policy.html'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className='rd-megamenu-list-item'>
                  <a
                    className='rd-megamenu-list-link'
                    href='search-results.html'
                  >
                    Search Results
                  </a>
                </li>
              </ul>
            </li>
            <li className='rd-megamenu-item rd-megamenu-banner'>
              <div className='rd-megamenu-title'>
                <span className='rd-megamenu-icon mdi mdi-sofa'></span>
                <span className='rd-megamenu-text'>Welcome to Our Store</span>
              </div>
              <a className='banner-classNameic' href='grid-shop.html'>
                <img
                  src='images/banner-1-300x202.jpg'
                  alt=''
                  width='300'
                  height='202'
                />
              </a>
            </li>
          </ul>
        </li>
        <li className='rd-nav-item rd-navbar--has-dropdown rd-navbar-submenu'>
          <a className='rd-nav-link' href='grid-shop.html'>
            Shop
          </a>
          <span className='rd-navbar-submenu-toggle'></span>
          {/* RD Navbar Dropdown */}
          <ul className='rd-menu rd-navbar-dropdown'>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='grid-shop.html'>
                Grid Shop
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='shop-list.html'>
                Shop List
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='single-product.html'>
                Single Product
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='cart-page.html'>
                Cart Page
              </a>
            </li>
            <li className='rd-dropdown-item'>
              <a className='rd-dropdown-link' href='checkout.html'>
                Checkout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default NavbarNav;
