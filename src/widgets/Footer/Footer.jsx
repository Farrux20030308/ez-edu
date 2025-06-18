import './footer.css'
import insta from '../../assets/icons/insta_icon.svg'
import tg from '../../assets/icons/tg_icon.svg'
import whatsapp from '../../assets/icons/whatsapp_icon.svg'
import phone from '../../assets/icons/phone_icon.svg'
import mail from '../../assets/icons/mail_icon.svg'
import logo from '../../assets/icons/logo2.png'
const Footer=()=>{
    return(
        <footer className='footer'>
        <div className="footer__title">
            <h2>Чего же вы ждете?</h2>
        </div>
        <div className="footer__content">
            <button className='footer__shadow-btn'>Записаться</button>
            <div className="contact">
            <a href="tel:+998979966111">+998 (97) 996 61 11</a>
            <button onClick={() => window.location.href = 'tel:+998979666111'}><img src={phone} alt="" /></button>
            <button onClick={()=> window.open('https://www.whatsapp.com', '_blank')}><img src={whatsapp} alt="" /></button>
            <button onClick={()=> window.open('https://www.telegram.com', '_blank')}><img src={tg} alt="" /></button>
            <button onClick={()=> window.open('https://www.instagram.com', '_blank')}><img src={insta} alt="" /></button>
            <button onClick={() => window.location.href = 'mailto:admin@ez-education.com'}><img src={mail} alt="" /></button>
            <a href="mailto:admin@ez-education.com">admin@ez-education.com</a>
            </div>
        </div>
        <div className="footer__sign">
            <img src={logo} alt="" />
            <p>ⓒ ООО “EZ education”</p>
        </div>
        </footer>
    )
}
export default Footer;