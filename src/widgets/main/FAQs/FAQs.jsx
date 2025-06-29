import { useState, useRef, useEffect } from 'react';
import './FAQs.css';
import { Element } from 'react-scroll';
const faqs = [
  { question: 'Как проходит обучение?', answer: 'Обучение проходит в онлайн формате на платформе Google Meets' },
  { question: 'Что необходимо иметь для занятий?', answer: 'Единственноe что вам будет нужно - это телефон, нуотбук или компьютер' },
  { question: 'Нужны ли учебники?', answer: 'Нет, все необходимые материлы находяться в облаке, к которому есть доступ 24/7' },
  { question: 'Когда я смогу заговорить?', answer: 'Наши студенты уже на первом месяце обучения начинают использованть простые предложения' },
  { question: 'Что если я не знаю свой уровень?', answer: 'На пробном уроке учитель определит ваш уровень с помощью теста' },
  { question: 'Насколько профессиональные преподаватели?', answer:'Минимальные требования к ним: IELTS 8, CEFR C1. Кроме этого они оцениваются нами отдельно' }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    
   <Element name='faq'>
     <section  className="faq__wrapper">
<div className="faq container">
      <h2>Часто задаваемые вопросы</h2>
      {faqs.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => toggleFAQ(index)}
        />
      ))}
    </div>
    </section>
   </Element>
    
    
    
  );
};

const ToggleIcon = ({ isActive }) => (
  <svg
    width="57"
    height="54"
    viewBox="0 0 57 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`toggle-icon ${isActive ? 'active' : ''}`}
  >
    <rect
      x="1.20215"
      y="0.5"
      width="55.2979"
      height="53"
      rx="13.5"
      className="toggle-bg"
    />
    <path
      d="M28.8581 14.3645L28.8581 28.757L28.8581 40.79"
      className="toggle-line vertical"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M42.0649 27.5833L27.6724 27.5833L15.6394 27.5832"
      className="toggle-line horizontal"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const FAQItem = ({ question, answer, isActive, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isActive
        ? contentRef.current.scrollHeight + 'px'
        : '0px';
    }
  }, [isActive]);

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <ToggleIcon isActive={isActive} />
      </div>
      <div ref={contentRef} className="faq-answer">
        <div className="faq-answer-inner">{answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
