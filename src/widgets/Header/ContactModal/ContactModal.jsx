// components/ContactModal.jsx
import './ContactModal.css';
import phone from '../../../assets/icons/phone_icon.svg';
import telegram from '../../../assets/icons/tg_icon.svg';
import whatsapp from '../../../assets/icons/whatsapp_icon.svg';
import gmail from '../../../assets/icons/mail_icon.svg';
import instagram from '../../../assets/icons/insta_icon.svg';

const ContactModal = ({ onClose }) => {
  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="blur__wrapper">
 <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="contact-item">
          <img src={phone} alt="Phone" />
          <span>+998 97 99 66 111</span>
          <a className="call-btn" href="tel:+998979966111">
            <i className="fas fa-phone"></i> Позвонить  
          </a>
        </div>
        <div className="contact-item">
          <img src={telegram} alt="Telegram" />
          <span>t.me/ez_edu</span>
        </div>
        <div className="contact-item">
          <img src={whatsapp} alt="WhatsApp" />
          <span>admin@ez-education.com</span>
        </div>
        <div className="contact-item">
          <img src={gmail} alt="Gmail" />
          <span>admin@ez-education.com</span>
        </div>
        <div className="contact-item">
          <img src={instagram} alt="Instagram" />
          <span>admin@ez-education.com</span>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default ContactModal;
