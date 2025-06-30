import './Courses.css';
import { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import CoursesSheet from './CoursesSheet/CoursesSheet';
import { useTranslation } from '../../../contexts/I18nContext';

import backpack from '../../../assets/img/backpack.png';
import laptop from '../../../assets/img/laptop.png';
import paper from '../../../assets/img/paper.png';
import toy_cube from '../../../assets/img/toy_cube.png';
import soon from '../../../assets/icons/soon.png';
import calendar from '../../../assets/icons/calendar.svg';
import cap from '../../../assets/icons/cap.svg';
import format from '../../../assets/icons/format.svg';
import time from '../../../assets/icons/time.svg';

const Courses = ({ onContactClick }) => {
  const { t } = useTranslation();
  const coursesData = t('courses.list');

  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1058);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      setSelectedCourse({ ...coursesData[index], img: images[index] });
      setSelectedIndex(index);
      setIsSheetOpen(true);
      return;
    }

    if (activeIndex === index) {
      setActiveIndex(null);
      setExpandedIndex(null);
      setShowDetailsIndex(null);
      return;
    }

    const currentRef = cardRefs.current[index];
    const firstRect = currentRef.getBoundingClientRect();
    setActiveIndex(index);

    const waitBeforeMove = index === 0 ? 300 : 0;

    setTimeout(() => {
      requestAnimationFrame(() => {
        const lastRect = currentRef.getBoundingClientRect();
        const deltaX = firstRect.left - lastRect.left;
        const deltaY = firstRect.top - lastRect.top;

        currentRef.style.transition = 'none';
        currentRef.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        currentRef.offsetHeight;

        currentRef.style.transition = 'transform 0.5s ease';
        currentRef.style.transform = 'translate(0, 0)';

        setTimeout(() => {
          currentRef.style.transition = '';
          currentRef.style.transform = '';
          setExpandedIndex(index);
          setTimeout(() => {
            setShowDetailsIndex(index);
          }, 700);
        }, 300);
      });
    }, waitBeforeMove);
  };

  const images = [backpack, laptop, paper, toy_cube];

  return (
    <Element name="courses">
      <section className="courses container">
        <h2>{t('courses.title')}</h2>
        <div className="courses-wrapper">
          {coursesData.map((item, index) => {
            const isHidden = activeIndex !== null && activeIndex !== index;
            const isExpanded = expandedIndex === index;
            const blured = index === 2 || index === 3 ? 'blurred' : '';
            const showExtraImage = index === 2 || index === 3;
            const hideContent = activeIndex === index && showDetailsIndex !== index;

            return (
              <div
                key={index}
                className={`courses-box ${isExpanded ? 'expanded' : ''} ${isHidden ? 'hidden' : ''}`}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => handleCardClick(index)}
              >
                <div className={`courses-box-left ${hideContent ? 'fade-out' : 'fade-in'}`}>
                  <img
                    className={`image ${isExpanded ? 'expanded' : ''} ${blured}`}
                    src={images[index]}
                    alt={item.title}
                  />
                  {showExtraImage && (
                    <img src={soon} alt="Дополнительная иллюстрация" className="left__image" />
                  )}
                  <h3>{item.title}</h3>
                  {!isExpanded && <p>{item.text}</p>}
                  <ul className={`courses-box-meta ${isExpanded ? 'expanded' : ''}`}>
                    <li><img src={calendar} alt="" /> {item.duration}</li>
                    <li><img src={time} alt="" /> {item.time}</li>
                    <li><img src={format} alt="" /> {item.format}</li>
                    <li><img src={cap} alt="" /> {item.age}</li>
                  </ul>
                </div>

                {showDetailsIndex === index && (
                  <div className="courses-box-details">
                    <h5>{t('courses.shortDescription')}</h5>
                    <p>{item.description}</p>
                    <h5>{t('courses.keyFeatures')}</h5>
                    <ol>
                      {item.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CoursesSheet
        onContactClick={onContactClick}
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        course={selectedCourse}
        index={selectedIndex}
      />
    </Element>
  );
};

export default Courses;
