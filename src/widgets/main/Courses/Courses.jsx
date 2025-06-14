import './Courses.css';
import { useEffect, useState, useRef } from 'react';
import backpack from '../../../assets/img/backpack.png';
import laptop from '../../../assets/img/laptop.png';
import paper from '../../../assets/img/paper.png';
import toy_cube from '../../../assets/img/toy_cube.png';
import calendar from '../../../assets/icons/calendar.svg';
import cap from '../../../assets/icons/cap.svg';
import format from '../../../assets/icons/format.svg';
import time from '../../../assets/icons/time.svg';

const Courses = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMetaIndex, setShowMetaIndex] = useState(null);
  const wrapperRef = useRef(null);

const handleCardClick = (index) => {
  if (activeIndex === index) {
    // Закрытие карточки
    setActiveIndex(null);
    setShowMetaIndex(null);
  } else {
    // Открытие карточки
    setActiveIndex(index);
    setShowMetaIndex(null); // сбросим мета
    setTimeout(() => {
      setShowMetaIndex(index); // показать мета через 300мс
    }, 300);
  }
};


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      duration: '8 - 12 месяцев',
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
        'Фокус на все 4 части экзамена: Listening, Reading, Writing, Speaking. Цель — набрать высокий балл за короткий срок.',
      duration: '3 - 6 месяцев',
      time: '90 минут',
      format: 'Мини-группа или индивидуально',
      age: 'От 16 лет',
      features: [
        'Пошаговая стратегия для каждого раздела IELTS',
        'Практика на реальных тестах',
        'Тренировка тайминга и устной речи',
      ],
    },
    {
      img: toy_cube,
      title: 'Kids',
      text: 'Основы английского для детей',
      description:
        'Программа разработана для детей от 5 лет. Через игры, песни и визуальные материалы дети учат базовую лексику и грамматику.',
      duration: '9 - 12 месяцев',
      time: '60 минут',
      format: 'В мини-группе с элементами игры',
      age: 'От 5 до 11 лет',
      features: [
        'Обучение в игровой форме',
        'Адаптация под возраст',
        'Развитие речи через взаимодействие',
      ],
    },
  ];

  const renderCard = (item, index) => {
    const isActive = activeIndex === index;

    return (
      <div
        className={`courses-box ${isActive ? 'expanded' : ''}`}
        key={index}
        onClick={() => {
  if (isActive) {
    setActiveIndex(null);
    setShowMetaIndex(null); 
  } else {
    setActiveIndex(index); 
    setShowMetaIndex(null); 
    setTimeout(() => setShowMetaIndex(index), 300); 
  }
}}
      >
        <div className="courses-box-left">
          <img className={`image ${isActive ? 'expanded' : ''}`} src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          {!isActive && <p>{item.text}</p>}
            
            {activeIndex === index && showMetaIndex === index && (
  <ul className="courses-box-meta">
    <li><img src={calendar} alt="" /> {item.duration}</li>
    <li><img src={time} alt="" /> {item.time}</li>
    <li><img src={format} alt="" /> {item.format}</li>
    <li><img src={cap} alt="" /> {item.age}</li>
  </ul>
)}

        </div>

        <div className="courses-box-details">
          <p><strong>Краткое описание:</strong> {item.description}</p>
          <p><strong>Ключевые отличия:</strong></p>
          <ol>
            {item.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  };

  return (
    <div className="courses container">
      <h2>Наши курсы</h2>
      <div className="courses-wrapper" ref={wrapperRef}>
        {activeIndex === null
  ? CoursesData.map((item, index) => renderCard(item, index))
  : renderCard(CoursesData[activeIndex], activeIndex)}

      </div>
    </div>
  );
};

export default Courses;
