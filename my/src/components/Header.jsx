import {useState} from 'react';
import logo from '../assets/img/devtafadzwa.jpg';

    const Header = () => {
        const [navVisible, setNavVisible] = useState(false);
      
        const handleNavToggle = () => {
          setNavVisible(!navVisible);
        };
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="DevTafadzwa" />
      </div>
      <button className="nav-toggle" aria-label="nav-toggle" onClick={handleNavToggle}>
        <span className="hamburger"></span>
      </button>
      <nav className={`nav ${navVisible ? 'nav-visible' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
          <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;