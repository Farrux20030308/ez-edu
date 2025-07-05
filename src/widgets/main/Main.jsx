import BgItems from '../BgItems/BgItems';
import Courses from './Courses/Courses';
import FAQs from './FAQs/FAQs';
import ForWho from './ForWho/ForWho';
import './Main.css'
import Banner from './MainPage/Banner';
import ReviewCard from './Reviews/Reviews';


const Main=({onContactClick})=>{
    return(
        <main className='main'>
        <Banner />
        <ForWho />
        <Courses onContactClick={onContactClick}/>
        <ReviewCard />
        <FAQs /> 
        <BgItems />
        </main>
    )
}

export default Main;