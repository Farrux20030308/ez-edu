import './Footer.css'
import insta from '../../assets/icons/insta_icon.svg'
import tg from '../../assets/icons/tg_icon.svg'
import whatsapp from '../../assets/icons/whatsapp_icon.svg'
import phone from '../../assets/icons/phone_icon.svg'
import mail from '../../assets/icons/mail_icon.svg'
import logo from '../../assets/icons/Logo2.png'
import { Link } from 'react-scroll'
import { useState } from 'react';
import { useTranslation } from '../../contexts/I18nContext';


const Footer = () => {
  const { t } = useTranslation();
  const [showPhoneCopied, setShowPhoneCopied] = useState(false);
  const [showEmailCopied, setShowEmailCopied] = useState(false);

  const copyPhone = () => {
    navigator.clipboard.writeText('+998979966111').then(() => {
      setShowPhoneCopied(true);
      setTimeout(() => setShowPhoneCopied(false), 2000);
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('admin@ez-education.com').then(() => {
      setShowEmailCopied(true);
      setTimeout(() => setShowEmailCopied(false), 2000);
    });
  };

  return (
    <footer className='footer'>
      <div className="footer__title">
        <h2>{t('footer.title')}</h2>
      </div>
      <div className="footer__content">
        <Link to='banner' smooth={true} duration={500} offset={-150} className='footer__shadow-btn'>
          {t('footer.button')}
        </Link>
        <div className="contact">
          <div className='copy_phone' onClick={copyPhone} style={{ cursor: 'pointer' }}>
            {showPhoneCopied ? t('footer.copied') : '+998 (97) 996 61 11'}
          </div>
          <button onClick={() => window.location.href = 'tel:+998979666111'}>
            <img src={phone} alt="Phone" />
          </button>
          <button onClick={() => window.open('https://www.whatsapp.com', '_blank')}>
            <img src={whatsapp} alt="WhatsApp" />
          </button>
          <button onClick={() => window.open('https://www.telegram.com', '_blank')}>
            <img src={tg} alt="Telegram" />
          </button>
          <button onClick={() => window.open('https://www.instagram.com', '_blank')}>
            <img src={insta} alt="Instagram" />
          </button>
          <button onClick={() =>
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=admin@ez-education.com')
          }>
            <img src={mail} alt="Mail" />
          </button>
          <div className='copy_mail' onClick={copyEmail} style={{ cursor: 'pointer' }}>
            {showEmailCopied ? t('footer.copied') : 'admin@ez-education.com'}
          </div>
        </div>
      </div>
      <div className="footer__sign">
        <img src={logo} alt="Logo" />
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};


export default Footer;
