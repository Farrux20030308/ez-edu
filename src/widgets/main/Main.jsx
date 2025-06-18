import Courses from './Courses/Courses';
import FAQs from './FAQs/FAQs';
import ForWho from './ForWho/ForWho';
import './Main.css'
import Banner from './MainPage/Banner';
import Reviews from './Reviews/Reviews';


const Main=()=>{
    return(
        <main className='main'>
        <Banner />
        <ForWho />
        <Courses />
        <Reviews />
        <FAQs />
        </main>
    )
}

export default Main;