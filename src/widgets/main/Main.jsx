import Courses from './Courses/Courses';
import ForWho from './ForWho/ForWho';
import './Main.css'
import Banner from './MainPage/Banner';
import Reviews from './Reviews/Reviews';


const Main=()=>{
    return(
        <>
        <Banner />
        <ForWho />
        <Courses />
        <Reviews />
        </>
    )
}

export default Main;