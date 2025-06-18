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
  import { Element } from 'react-scroll';



  

  const Courses = () => {
    const [activeIndex, setActiveIndex] = useState(null); 
    const [expandedIndex, setExpandedIndex] = useState(null); 
    const cardRefs = useRef([]);
    const [showDetailsIndex, setShowDetailsIndex] = useState(null);


    const CoursesData = [
      {
        img: backpack,
        title: 'General',
        text: 'Занятия в мини-группах с использованием комплексной программы',
        description:
          'Куурс направлен на развитие общих навыков и знаний английского. Используется программа, разработанная на основе программ Оксфордского и Кембриджского университетов.',
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
          'Интенсивный курс по подготовке к IELTS. Нацелен на подготовку ко всем разделам экзамена: чтение, аудирование, письмо, речь и на улучшение тайм-менеджмента. ',
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
          'Курс нацелен привить ребенку интерес к учёбе и в частности к английскому языку. Занятия проводяться в игравом формате, с использованием сервисов Kahoot и Duolingo, что помогает концентрировать внимание и мотивировать ребенка.',
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

    const handleCardClick = (index) => {
  if (activeIndex === index) {
    setActiveIndex(null);
    setExpandedIndex(null);
    setShowDetailsIndex(null);
    return;
  }

  const currentRef = cardRefs.current[index];
  const firstRect = currentRef.getBoundingClientRect();

  setActiveIndex(index);

  requestAnimationFrame(() => {
    const lastRect = currentRef.getBoundingClientRect();
    const deltaX = firstRect.left - lastRect.left;
    const deltaY = firstRect.top - lastRect.top;

    currentRef.style.transition = 'none';
    currentRef.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    currentRef.offsetHeight; // force reflow

    currentRef.style.transition = 'transform 0.5s ease';
    currentRef.style.transform = 'translate(0, 0)';

    const delay = index === 0 ? 0 : 300;

    setTimeout(() => {
      currentRef.style.transition = '';
      currentRef.style.transform = '';
      setExpandedIndex(index);
      setTimeout(() => {
        setShowDetailsIndex(index);
      }, 900); // задержка перед появлением details (можно настроить)
    }, delay);
  });
};



    return (
     <Element name='courses'>
       <section className="courses container">
        <h2>Наши курсы</h2>
        <div className="courses-wrapper">
          {CoursesData.map((item, index) => {
            const isHidden = activeIndex !== null && activeIndex !== index;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`courses-box ${isExpanded ? 'expanded' : ''} ${isHidden ? 'hidden' : ''}`}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => handleCardClick(index)}
              >
                <div className="courses-box-left">
                  <img
                    className={`image ${isExpanded ? 'expanded' : ''} ${
                      isHidden ? 'blurred' : ''
                    }`}
                    src={item.img}
                    alt={item.title}
                  />
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
    <p>
      <strong>Краткое описание:</strong> {item.description}
    </p>
    <p><strong>Ключевые отличия:</strong></p>
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
     </Element>
    );
  };

  export default Courses;
