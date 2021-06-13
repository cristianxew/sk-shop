import React from "react";
import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__icons">
      <a href="/#" className="icon">
        <i className="fab fa-facebook-square"></i>
      </a>
      <a href="/#" className="icon">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/#" className="icon">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="/#" className="icon">
        <i className="fab fa-instagram-square"></i>
      </a>
    </div>
    <div className="footer__copy">&copy; 2020 Copyright: SK-Shop</div>
  </footer>
);

export default Footer;
