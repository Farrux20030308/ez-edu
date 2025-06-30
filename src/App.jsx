import { useEffect, useState } from 'react'
import './App.css'
import Header from './widgets/Header/Header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './widgets/main/Main'
import Footer from './widgets/Footer/Footer'
import ContactModal from './widgets/Header/ContactModal/ContactModal';
import './assets/styles/common.css'
import './assets/styles/media.css'

const App = () => {
  
  const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  const handleLoad = () => {
    document.fonts.ready.then(() => {
      setTimeout(() => {
        setLoading(false)
      }, 250)
    })
  }

  if (document.readyState === 'complete') {
    handleLoad()
  } else {
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }
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
      <Main onContactClick={()=> setShowModal(true)} />
      <Footer />
    </>
  )
}

export default App
