import './ForWho.css'
import { useEffect,useState } from 'react'
import plane from '../../../assets/img/plane.png'
import books from '../../../assets/img/books.png'
import hands from '../../../assets/img/hands.png'
import { Element } from 'react-scroll'



const ForWho=()=>{
const forWhoData = [
  {
    img: books,
    title: 'Учеба',
    text: 'Кто хочет поступить в зарубежные ВУЗы',
  },
  {
    img: hands,
    title: 'Работа - бизнесс',
    text: 'Для работы в международных компаниях',
  },
  {
    img: plane,
    title: 'Путешествия',
    text: 'Для тех, кто хочет путешествовать и заводить знакомства по всему миру',
  },
   {
    img: plane,
    title: 'Путешествия',
    text: 'Для тех, кто хочет путешествовать и заводить знакомства по всему миру',
  },
];



   


    return(
         <Element name='ForWho'>
          <section className="for__who container">
      <h2>Для кого наши курсы</h2>
      <div className="for__who-wrapper">
        {forWhoData.map((item, index) => (
          <div className="for__who-box" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
         </Element>
    )
}

export default ForWho;