import Courses from './Courses/Courses';
import FAQs from './FAQs/FAQs';
import ForWho from './ForWho/ForWho';
import './Main.css'
import Banner from './MainPage/Banner';
import Reviews from './Reviews/Reviews';


const Main=({onContactClick})=>{
    return(
        <main className='main'>
        <Banner />
        <ForWho />
        <Courses onContactClick={onContactClick}/>
        <Reviews />
       {/* <FAQs /> */}
        </main>
    )
}

export default Main;