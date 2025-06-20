import './Banner.css'
import Form from './Form/form';
import { Element } from 'react-scroll';


    const Banner=()=>{
        return(
        
            <Element id='banner' name='banner'>
                <section  className='banner__wrapper'>
            <div className="banner container">
                <div className="banner__left">
                <h2 className='banner__text'>Английский - онлайн, просто и удобно</h2> 
                <div className='banner__video' src="1"><h3 className='video__slogan'>"EZ education - проще, чем кажется"</h3></div>          
                    
                </div>
                <Form />
            </div>
        </section>
            </Element>
            
            
        )
    }

export default Banner;