import React, { useEffect, useRef, useState } from 'react';
import './Reviews.css';
import teacher from '../../../assets/icons/teacher_icon.svg';
import time from '../../../assets/icons/time_icon.svg';
import cap from '../../../assets/icons/cap_icon.svg';
import { Element } from 'react-scroll';
import { useTranslation } from '../../../contexts/I18nContext';
import reviews from '../../../data/reviews.json';

const ReviewCard = () => {
  const { t } = useTranslation();
  const reviewItems = t('reviews.items', { returnObjects: true });

  const scrollRef = useRef(null);
  const [nameColorMap, setNameColorMap] = useState(() => {
    const stored = localStorage.getItem('nameColorMap');
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem('nameColorMap', JSON.stringify(nameColorMap));
  }, [nameColorMap]);

  const getColorForName = (name) => {
    if (nameColorMap[name]) return nameColorMap[name];

    const colors = ['0069fd', '00cad8', 'ffa500', '8a2be2', '00b894', 'ff6b6b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const updatedMap = { ...nameColorMap, [name]: randomColor };
    setNameColorMap(updatedMap);
    localStorage.setItem('nameColorMap', JSON.stringify(updatedMap));

    return randomColor;
  };

  useEffect(() => {
    const container = scrollRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      container.classList.remove('active');
    };

    const onMouseUp = () => {
      isDown = false;
      container.classList.remove('active');
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <Element name="reviews">
      <section className="reviews">
        <h2>{t('reviews.title')}</h2>
        <div className="reviews-card-wrapper" ref={scrollRef}>
          {reviews.map((review, index) => {
            const bgColor = getColorForName(review.name);
            return (
              <div key={index} className="review-card">
                <div className="review-card-header">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      review.name
                    )}&background=${bgColor}&color=fff&format=png&rounded=true`}
                    alt="avatar"
                    className="review-avatar"
                  />
                  <strong>{review.name}</strong>
                </div>
                <div className="review-content">
                  <p>{review.text}</p>
                  <ul className="review-meta">
                    <ul className="review-meta">
                      <li>
                        <img src={cap} alt="" /> {t('reviews.age')}: {reviewItems[index]?.agePlaceholder}
                      </li>
                      <li>
                        <img src={teacher} alt="" /> {t('reviews.teacher')}: {reviewItems[index]?.teacherPlaceholder}
                      </li>
                      <li>
                        <img src={time} alt="" /> {t('reviews.duration')}: {reviewItems[index]?.durationPlaceholder}
                      </li>
                    </ul>

                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Element>
  );
};

export default ReviewCard;
