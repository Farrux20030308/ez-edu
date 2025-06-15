import './Courses.css';
import { useEffect, useRef, useState } from 'react';
import backpack from '../../../assets/img/backpack.png';
import laptop from '../../../assets/img/laptop.png';
import paper from '../../../assets/img/paper.png';
import toy_cube from '../../../assets/img/toy_cube.png';
import calendar from '../../../assets/icons/calendar.svg';
import cap from '../../../assets/icons/cap.svg';
import format from '../../../assets/icons/format.svg';
import time from '../../../assets/icons/time.svg';

const Typewriter = ({ text, speed = 30 }) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
};

const Courses = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

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

  const handleCardClick = (index) => {
    const currentRef = cardRefs.current[index];
    const firstRect = currentRef.getBoundingClientRect();

    // Меняем активный индекс
    setActiveIndex((prev) => {
      return prev === index ? null : index;
    });

    requestAnimationFrame(() => {
      const lastRect = currentRef.getBoundingClientRect();
      const deltaX = firstRect.left - lastRect.left;
      const deltaY = firstRect.top - lastRect.top;

      currentRef.style.transition = 'none';
      currentRef.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      currentRef.offsetHeight; // Reflow

      currentRef.style.transition = 'transform 0.4s ease';
      currentRef.style.transform = 'translate(0, 0)';

      setTimeout(() => {
        currentRef.style.transform = '';
      }, 400);
    });
  };

  return (
    <div className="courses container">
      <h2>Наши курсы</h2>
      <div className="courses-wrapper">
        {(activeIndex === null
          ? CoursesData
          : [CoursesData[activeIndex]]
        ).map((item, index) => {
          const realIndex = activeIndex === null ? index : activeIndex;
          return (
            <div
              key={realIndex}
              className={`courses-box ${activeIndex === realIndex ? 'expanded' : ''}`}
              ref={(el) => (cardRefs.current[realIndex] = el)}
              onClick={() => handleCardClick(realIndex)}
            >
              <div className="courses-box-left">
                <img
                  className={`image ${
                    activeIndex === realIndex ? 'expanded' : ''
                  } ${!activeIndex && (realIndex === 2 || realIndex === 3) ? 'blurred' : ''}`}
                  src={item.img}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
                {activeIndex !== realIndex && <p>{item.text}</p>}

                <ul className={`courses-box-meta ${activeIndex === realIndex ? 'expanded' : ''}`}>
                  <li><img src={calendar} alt="" /> {item.duration}</li>
                  <li><img src={time} alt="" /> {item.time}</li>
                  <li><img src={format} alt="" /> {item.format}</li>
                  <li><img src={cap} alt="" /> {item.age}</li>
                </ul>
              </div>

              <div className="courses-box-details">
                <p>
                  <strong>Краткое описание:</strong>{' '}
                  <Typewriter text={item.description} speed={25} />
                </p>
                <p><strong>Ключевые отличия:</strong></p>
                <ol>
                  {item.features.map((feature, i) => (
                    <li key={i}>
                      <Typewriter text={feature} speed={25} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
