import React from 'react';
import './Reviews.css'
import teacher from '../../../assets/icons/teacher_icon.svg'
import time from '../../../assets/icons/time_icon.svg'
import cap from '../../../assets/icons/cap_icon.svg'


const reviews = [
  {
    name: 'Irina',
    text: 'Мой сын с удовольствием заходит на занятия, стал увереннее говорить по-английски. Спасибо за внимательный подход и интересные уроки!',
    age: '12 лет',
    teacher: 'Mr. Owen',
    duration: '1 месяц',
  },
  {
    name: 'Aziz',
    text: 'Курсы крутые! Уроки не скучные, преподаватель умеет заинтересовать и мотивировать, объясняет на понятном языке.',
    age: '16 лет',
    teacher: 'Ms. Ted',
    duration: '3 месяца',
  },
  {
    name: 'Ozodbek',
    text: 'Очень удобный формат — учусь после работы. Преподаватель объясняет чётко, заметно улучшилось понимание и разговорная речь.',
    age: '32 года',
    teacher: 'Mr. Owen',
    duration: '1 месяц',
  },
  {
    name: 'Irina',
    text: 'Мой сын с удовольствием заходит на занятия, стал увереннее говорить по-английски. Спасибо за внимательный подход и интересные уроки!',
    age: '12 лет',
    teacher: 'Mr. Owen',
    duration: '1 месяц',
  },{
    name: 'Irina',
    text: 'Мой сын с удовольствием заходит на занятия, стал увереннее говорить по-английски. Спасибо за внимательный подход и интересные уроки!',
    age: '12 лет',
    teacher: 'Mr. Owen',
    duration: '1 месяц',
  },{
    name: 'Irina',
    text: 'Мой сын с удовольствием заходит на занятия, стал увереннее говорить по-английски. Спасибо за внимательный подход и интересные уроки!',
    age: '12 лет',
    teacher: 'Mr. Owen',
    duration: '1 месяц',
  },{
    name: 'Irina',
    text: 'Мой сын с удовольствием заходит на занятия, стал увереннее говорить по-английски. Спасибо за внимательный подход и интересные уроки!',
    age: '12 лет',
    teacher: 'Mr. Owen',
    duration: '1 месяц',
  },
];

const getRandomColor = () => {
  const colors = ['0069fd', '00cad8', 'ffa500', '8a2be2', '00b894', 'ff6b6b'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ReviewCard = () => {
  return (
    
    <div className="reviews">
        <h2>Отзывы</h2>
        <div className="reviews-card-wrapper">
{reviews.map((review, index) => {
        const bgColor = getRandomColor();
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
                <li><img src={cap} alt="" /> {review.age}</li>
                <li> <img src={teacher} alt="" />{review.teacher}</li>
                <li><img src={time} alt="" /> {review.duration}</li>
              </ul>
            </div>
          </div>
        );
      })}
        </div>
      
    </div>
  );
};

export default ReviewCard;
