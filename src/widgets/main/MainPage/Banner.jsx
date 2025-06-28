import { useEffect, useState } from 'react';
import './Banner.css';
import Form from './Form/form';
import { Element } from 'react-scroll';
import { useTranslation } from '../../../contexts/I18nContext';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1058);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Element name="banner">
      <section className="banner__wrapper">
        <div className="banner container">
          {isMobile ? (
            <div className="banner__left">
              <h2 className="banner__text">{t('banner.title')}</h2>
              <Form />
              <div className="banner__video">
                <h3 className="video__slogan">{t('banner.slogan')}</h3>
              </div>
            </div>
          ) : (
            <>
              <div className="banner__left">
                <h2 className="banner__text">{t('banner.title')}</h2>
                <div className="banner__video">
                  <h3 className="video__slogan">{t('banner.slogan')}</h3>
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
