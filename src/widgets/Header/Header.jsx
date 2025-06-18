import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";
import './Header.css'
import logo from '../../assets/icons/Logo2.png'
import Language from '../Header/Language';
import '../../assets/styles/common.css'
import phone from '../../assets/icons/phone.png'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="logo"><a href=""><img src={logo} alt="" /></a></div>
                <nav className="nav">
  <ul className="link_list">
    {['Для кого', 'Курсы', 'Отзывы', 'Вопросы'].map((text, index) => (
      <li key={index}>
        <a href="#">{text}</a>
      </li>
    ))}


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
        </>
    )
}
export default Header;
