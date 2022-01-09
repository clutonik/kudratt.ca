import { element } from "prop-types";

const pages = [
  { title: "About Us", href: "not-defined", dropdown: [] },
  { title: "What We offer", href: "not-defined", dropdown: [] },
  { title: "Our Team", href: "not-defined", dropdown: [] },
  { title: "Testimonials", href: "not-defined", dropdown: [] },
];

const blog = [
  { title: "Grid Blog", href: "not-defined", dropdown: [] },
  { title: "Blog List", href: "not-defined", dropdown: [] },
  { title: "Blog Post", href: "not-defined", dropdown: [] },
];

const gallery = [
  { title: "Grid Gallery", href: "not-defined", dropdown: [] },
  { title: "Grid Full-width Gallery", href: "not-defined", dropdown: [] },
  { title: "Masonry Gallery", href: "not-defined", dropdown: [] },
];

const shop = [
  { title: "Grid Shop", href: "not-defined", dropdown: [] },
  { title: "Shop List", href: "not-defined", dropdown: [] },
  { title: "Single Product", href: "not-defined", dropdown: [] },
  { title: "Cart Page", href: "not-defined", dropdown: [] },
  { title: "Checkout", href: "not-defined", dropdown: [] },
];

const elements = [
  {
    icon: "rd-megamenu-icon mdi mdi-apps",
    title: "Elements",
    listSize: 2,
    listItems: [
      { title: "Typography", href: "not-defined" },
      { title: "Icon lists", href: "not-defined" },
      { title: "Progress bars", href: "not-defined" },
      { title: "Calls to action", href: "not-defined" },
      { title: "Tabs & accordions", href: "not-defined" },
      { title: "Buttons", href: "not-defined" },
      { title: "Tables", href: "not-defined" },
      { title: "Forms", href: "not-defined" },
      { title: "Counters", href: "not-defined" },
      { title: "Grid system", href: "not-defined" },
    ],
  },
  {
    icon: "rd-megamenu-icon mdi mdi-layers",
    title: "Additional Pages",
    listItems: [
      { title: "404 Page", href: "not-defined" },
      { title: "Coming Soon", href: "not-defined" },
      { title: "Contact Us", href: "not-defined" },
      { title: "Privacy Policy", href: "not-defined" },
      { title: "Search Results", href: "not-defined" },
    ],
  },
  {
    icon: "rd-megamenu-icon mdi mdi-sofa",
    title: "Welcome to our store",
    banner: "images/banner-1-300x202.jpg",
    bannerAltText: "Sofa",
    href: "not-defined",
  },
];

export const navlinks = [
  { title: "Home", href: "not-defined" },
  { title: "Pages", href: "not-defined", dropdown: pages },
  { title: "Blog", href: "not-defined", dropdown: blog },
  { title: "Gallery", href: "not-defined", dropdown: gallery },
  { title: "Elements", href: "not-defined", dropdown: elements },
  { title: "Shop", href: "not-defined", dropdown: shop },
];
