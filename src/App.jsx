import { useEffect, useState } from 'react'
import './App.css'
import Header from './widgets/header/Header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './widgets/main/Main'
import './assets/styles/media.css'
import Footer from './widgets/Footer/Footer'
import ContactModal from './widgets/header/ContactModal/ContactModal';

const App = () => {
  
  const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }

    window.addEventListener('load', handleLoad)

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  if (loading) {
    return (
      <div className="loader__wrapper">
        <div className='loader'></div>
      </div>
      
    )
  }

  return (
    <>
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}

     <Header onContactClick={() => setShowModal(true)} />
      <Main />
      <Footer />
    </>
  )
}

export default App
