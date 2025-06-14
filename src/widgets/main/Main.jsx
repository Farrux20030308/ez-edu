import Courses from './Courses/Courses';
import ForWho from './ForWho/ForWho';
import './Main.css'
import Banner from './MainPage/Banner';


const Main=()=>{
    return(
        <>
        <Banner />
        <ForWho />
        <Courses />
        </>
    )
}

export default Main;