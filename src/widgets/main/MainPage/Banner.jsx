import './Banner.css'
import Form from './Form/form';


    const Banner=()=>{
        return(
        <div className='banner__wrapper'>
            <div className="banner container">
                <div className="banner__left">
                <h2 className='banner__text'>Английский - онлайн, просто и удобно</h2> 
                <video className='banner__video' src=""> <h3>EZ education - проще, чем кажется</h3></video>              
                </div>
                <Form />
            </div>
        </div>
            
            
            
        )
    }

export default Banner;