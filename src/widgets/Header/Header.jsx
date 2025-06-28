  import { Link } from 'react-scroll';
  import './Header.css';
  import logo from '../../assets/icons/Logo2.png';
  import Language from './language/Language.jsx';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import { useState, useEffect, useRef } from 'react';

  const Header = ({ onContactClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);


    const toggleMenu = () => setMenuOpen(prev => !prev);

    const navLinks = [
      { to: 'ForWho', label: 'Для кого' },
      { to: 'courses', label: 'Курсы' },
      { to: 'reviews', label: 'Отзывы' },
      { to: 'faq', label: 'Вопросы' },
    ];

    const useIsMobile = (breakpoint = 768) => {
      const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= breakpoint);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [breakpoint]);

      return isMobile;
    };

    const isMobile = useIsMobile();

  
    useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  if (menuOpen) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, [menuOpen]);

    return (
      <header className="header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="EZ Education Logo" />
          </a>
        </div>

        {!isMobile && (
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
              <button className="shadow__btn" onClick={onContactClick}>
                <i className="fas fa-phone" style={{ color: 'white', fontSize: '24px' }}></i>
                Связаться
              </button>
            </ul>
          </nav>
        )}

        {isMobile && (
          <div className="header-mobile-right">
            <button className="shadow__btn" onClick={onContactClick}>
              <i className="fas fa-phone" style={{ color: 'white', fontSize: '24px' }}></i>
            </button>
            <Language />
            <button
            ref={buttonRef}
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
                <path className="line line1" d="M4 6H20" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                <path className="line line2" d="M4 12H20" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                <path className="line line3" d="M4 18H20" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}

        
          <nav className={`menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="link"
                to={link.to}
                smooth={true}
                duration={500}
                offset={-150}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        
      </header>
    );
  };

  export default Header;
