import { Link } from 'react-scroll';
import './Header.css';
import logo from '../../assets/icons/Logo2.png';
import Language from './Language';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <a href='/'>
          <img src={logo} alt="EZ Education Logo" />
        </a>
      </div>
      <nav className="nav">
        <ul className="link_list">
          <li>
            <Link className='link' to="ForWho" smooth={true} duration={500} offset={-150}>
              Для кого
            </Link>
          </li>
          <li>
            <Link className='link' to="courses" smooth={true} duration={500} offset={-150}>
              Курсы
            </Link>
          </li>
          <li>
            <Link className='link' to="reviews" smooth={true} duration={500} offset={-150}>
              Отзывы
            </Link>
          </li>
          <li>
            <Link className='link' to="faq" smooth={true} duration={500} offset={-150}>
              Вопросы
            </Link>
          </li>

          <div className="language-list-item">
            <Language />
          </div>

          <button className="shadow__btn">
            <i className="fas fa-phone" style={{ color: 'white', fontSize: '24px' }}></i>
            Связаться
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
