import './ContactModal.css';
import '../../../assets/styles/media.css';
import phone from '../../../assets/icons/phone_icon.svg';
import telegram from '../../../assets/icons/tg_icon.svg';
import whatsapp from '../../../assets/icons/whatsapp_icon.svg';
import gmail from '../../../assets/icons/mail_icon.svg';
import instagram from '../../../assets/icons/insta_icon.svg';
import { useTranslation } from '../../../contexts/I18nContext';

const ContactModal = ({ onClose }) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const { t } = useTranslation();

  const gmailLink = isMobile
    ? 'mailto:admin@ez-education.com'
    : 'https://mail.google.com/mail/?view=cm&fs=1&to=admin@ez-education.com';

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="blur__wrapper">
        <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
          <a className="call-btn" href="tel:+998979966111">
            <i className="fas fa-phone"></i> {t("modal.call")}
          </a>

          <div className="contact-item">
            <img src={phone} alt="Телефон" />
            <span><a href="tel:+998979966111">+998 97 99 66 111</a></span>
          </div>

          <div className="contact-item">
            <img src={telegram} alt="Telegram" />
            <span><a href="https://t.me/ez_edu" target="_blank" rel="noopener noreferrer">{t("modal.telegram")}</a></span>
          </div>

          <div className="contact-item">
            <img src={whatsapp} alt="WhatsApp" />
            <span><a href="https://wa.me/qr/2HY7AHYW2ISWB1" target="_blank" rel="noopener noreferrer">{t("modal.whatsapp")}</a></span>
          </div>

          <div className="contact-item">
            <img src={instagram} alt="Instagram" />
            <span><a href="https://www.instagram.com/ez.educenter" target="_blank" rel="noopener noreferrer">{t("modal.instagram")}</a></span>
          </div>

          <div className="contact-item">
            <img src={gmail} alt="Gmail" />
            <span><a href={gmailLink} target={isMobile ? '_self' : '_blank'} rel="noopener noreferrer">{t("modal.gmail")}</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
