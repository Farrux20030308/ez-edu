import { Link } from 'react-scroll';
import './Header.css';
import logo from '../../assets/icons/Logo2.png';
import Language from './language/Language.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import ContactModal from './ContactModal/ContactModal.jsx';

const Header = ({onContactClick}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);


  // один массив — для обоих меню
  const navLinks = [
    { to: 'ForWho', label: 'Для кого' },
    { to: 'courses', label: 'Курсы' },
    { to: 'reviews', label: 'Отзывы' },
    { to: 'faq', label: 'Вопросы' },
  ];

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="EZ Education Logo" />
        </a>
      </div>

      <nav className="nav">
        <ul className="link_list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="link"
                to={link.to}
                smooth={true}
                duration={500}
                offset={-150}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <div className="language-list-item">
            <Language />
          </div>
            <li className='link'>
          <button className="shadow__btn" onClick={onContactClick}>
  <i className="fas fa-phone" style={{ color: 'white', fontSize: '24px' }}></i>
  Связаться
</button>
            </li>


        </ul>
      </nav>
      <button
        className={`hamburger-btn ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="line line1"
            d="M4 6H20"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="line line2"
            d="M4 12H20"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="line line3"
            d="M4 18H20"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Мобильное меню (если открыто) */}
      {menuOpen && (
        <nav className="menu">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="link"
              to={link.to}
              smooth={true}
              duration={500}
              offset={-150}
              onClick={() => setMenuOpen(false)} // закрываем при клике
            >
              {link.label}
            </Link>
          ))}
          <Language />
          
          <button className="shadow__btn" onClick={onContactClick}>
  <i className="fas fa-phone" style={{ color: 'white', fontSize: '24px' }}></i>
  Связаться
</button>
          
        </nav>
      )}
    </header>
  );
};

export default Header;
