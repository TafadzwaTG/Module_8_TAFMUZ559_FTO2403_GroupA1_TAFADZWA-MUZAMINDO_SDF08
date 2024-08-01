import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:gumbitafadzwa@gmail.com" className="footer__link">gumbitafadzwa@gmail.com</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://codepen.io/">
            <i className="fa-brands fa-codepen"></i> 
          </a> 
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/Tafadzwa96">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.figma.com/files/user/1359087223930906331?fuid=1359087223930906331">
            <i className="fab fa-figma"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.linkedin.com/in/tafadzwa-muzamindo-996268124">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;