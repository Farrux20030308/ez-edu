import './Banner.css'
import Form from './Form/form';
import { Element } from 'react-scroll';


    const Banner=()=>{
        return(
        
            <Element name='banner'>
                <section className='banner__wrapper'>
            <div className="banner container">
                <div className="banner__left">
                <h2 className='banner__text'>Английский - онлайн, просто и удобно</h2> 
                <video className='banner__video' src="1"></video>              
                </div>
                <Form />
            </div>
        </section>
            </Element>
            
            
        )
    }

export default Banner;