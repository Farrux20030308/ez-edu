import { useEffect, useState } from 'react';
import './Banner.css';
import Form from './Form/form';
import { Element } from 'react-scroll';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1058);
    };

    handleResize(); // первоначально
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Element name="banner">
      <section className="banner__wrapper">
        <div className="banner container">
          {isMobile ? (
            // 👇 Мобильная структура: текст + форма + видео ВМЕСТЕ
            <div className="banner__left">
              <h2 className="banner__text">Английский - онлайн, просто и удобно</h2>
              <Form />
              <div className="banner__video">
                <h3 className="video__slogan">"EZ education - проще, чем кажется"</h3>
              </div>
            </div>
          ) : (
            // 👇 Десктопная структура: текст + видео слева, форма справа
            <>
              <div className="banner__left">
                <h2 className="banner__text">Английский - онлайн, просто и удобно</h2>
                <div className="banner__video">
                  <h3 className="video__slogan">"EZ education - проще, чем кажется"</h3>
                </div>
              </div>
              <Form />
            </>
          )}
        </div>
      </section>
    </Element>
  );
};

export default Banner;
