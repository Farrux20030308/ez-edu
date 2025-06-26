import './Courses.css';
import { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import CoursesSheet from './CoursesSheet/CoursesSheet';

import backpack from '../../../assets/img/backpack.png';
import laptop from '../../../assets/img/laptop.png';
import paper from '../../../assets/img/paper.png';
import toy_cube from '../../../assets/img/toy_cube.png';
import soon from '../../../assets/icons/soon.png';
import calendar from '../../../assets/icons/calendar.svg';
import cap from '../../../assets/icons/cap.svg';
import format from '../../../assets/icons/format.svg';
import time from '../../../assets/icons/time.svg';
import { fa } from 'intl-tel-input/i18n';

const Courses = ({onContactClick}) => {
  // 🔵 Состояния
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // 🔵 Ссылки
  const cardRefs = useRef([]);

  // 🔧 useEffect — отслеживаем ширину экрана
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1058);
    };
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🔧 Обработчик клика по карточке
  const handleCardClick = (index) => {
    if (isMobile) {
  setSelectedCourse(CoursesData[index]);
  setSelectedIndex(index); // 👈 Добавь это
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

  // 🔷 Данные курсов
  const CoursesData = [
    {
      img: backpack,
      title: 'General',
      text: 'Занятия в мини-группах с использованием комплексной программы',
      description:
        'Курс направлен на развитие общих навыков и знаний английского. Используется программа, разработанная на основе программ Оксфордского и Кембриджского университетов.',
      duration: '12 - 16 месяцев',
      time: '80 минут',
      format: 'В мини-группе до 6 человек',
      age: 'От 12 лет',
      features: [
        'Сильная программа, учитывающая групповые занятия',
        'Четкое разделение на уровни (Beginner - Advanced)',
        'Практика с группой',
      ],
    },
    {
      img: laptop,
      title: 'Individual',
      text: 'Занятия полностью подстроенные под студента',
      description:
        'Занятия полностью подстроены под ученика, на основе начального уровня, целей, слабых сторон и сроков.',
      duration: '3 - 18 месяцев',
      time: '80 минут',
      format: 'Один на один с преподавателем',
      age: 'От 12 лет',
      features: [
        'Индивидуальный подход',
        'Максимальная эффективность',
        'Кратчайшие сроки достижения результатов',
      ],
    },
    {
      img: paper,
      title: 'IELTS',
      text: 'Интенсивный курс для подготовки к IELTS',
      description:
        'Интенсивный курс по подготовке к IELTS. Нацелен на подготовку ко всем разделам экзамена: чтение, аудирование, письмо, речь и на улучшение тайм-менеджмента.',
      duration: '3 - 6 месяцев',
      time: '80 минут',
      format: 'В мини-группе до 6 человек',
      age: 'От 12 лет',
      features: [
        'Программа подточена под IELTS экзамен',
        'Регулярные MOCK - экзамены',
      ],
    },
    {
      img: toy_cube,
      title: 'Kids',
      text: 'Основы английского для детей',
      description:
        'Курс нацелен привить ребенку интерес к учёбе и в частности к английскому языку. Занятия проводятся в игровом формате с использованием сервисов Kahoot и Duolingo.',
      duration: '3 - 6 месяцев',
      time: '60 минут',
      format: 'В мини-группе до 6 человек',
      age: 'От 6 до 12 лет',
      features: [
        'Занятия в игровом формате',
        'Удобный родительский контроль',
      ],
    },
  ];

  // 🔽 Рендер
  return (
    <Element name="courses">
      <section className="courses container">
        <h2>Наши курсы</h2>
        <div className="courses-wrapper">
          {CoursesData.map((item, index) => {
            const isHidden = activeIndex !== null && activeIndex !== index;
            const isExpanded = expandedIndex === index;
            const blured = (index === 2 || index === 3) ? 'blurred' : '';
            const showExtraImage = index === 2 || index === 3;
            const hideContent = activeIndex === index && showDetailsIndex !== index;

            return (
              <div
                key={index}
                className={`courses-box ${isExpanded ? 'expanded' : ''} ${isHidden ? 'hidden' : ''}`}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`courses-box-left ${hideContent ? 'fade-out' : 'fade-in'}`}
                >
                  <img
                    className={`image ${isExpanded ? 'expanded' : ''} ${blured}`}
                    src={item.img}
                    alt={item.title}
                  />
                  {showExtraImage && (
                    <img
                      src={soon}
                      alt="Дополнительная иллюстрация"
                      className="left__image"
                    />
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
                    <h5>Краткое описание:</h5>
                    <p> {item.description}</p>
                    <h5>Ключевые отличия:</h5>
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

      <CoursesSheet onContactClick={onContactClick}
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        course={selectedCourse}
          index={selectedIndex}
      />
    </Element>
  );
};

export default Courses;
