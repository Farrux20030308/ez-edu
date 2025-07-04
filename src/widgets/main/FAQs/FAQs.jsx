import { useState, useRef, useEffect } from 'react';
import './FAQs.css';
import { Element } from 'react-scroll';
import { useTranslation } from '../../../contexts/I18nContext';



const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const faqs = t('faq.list');

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    
   <Element name='faq'>
     <section  className="faq__wrapper">
<div className="faq container">
     <h2>{t('faq.title')}</h2>
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
    width="43"
    height="40"
    viewBox="0 0 55 54"
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
