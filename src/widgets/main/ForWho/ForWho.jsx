import './ForWho.css';
import { useEffect, useState } from 'react';
import plane from '../../../assets/img/plane.png';
import books from '../../../assets/img/books.png';
import hands from '../../../assets/img/hands.png';
import horse from '../../../assets/img/horse.png';
import { Element } from 'react-scroll';
import { useTranslation } from '../../../contexts/I18nContext';

const ForWho = () => {
  const { t } = useTranslation();

  const images = [books, hands, plane, horse]; // порядок сохраняется

  const translatedData = t('forWho.items');

  return (
    <Element name='ForWho'>
      <section className="for__who container">
        <h2>{t('forWho.title')}</h2>
        <div className="for__who-wrapper">
          {translatedData.map((item, index) => (
            <div className="for__who-box" key={index}>
              <img src={images[index]} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default ForWho;
