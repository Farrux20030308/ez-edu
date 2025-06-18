import { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'
import './App.css'
import Header from './widgets/header/Header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './widgets/main/Main';
import './assets/styles/media.css'


  const App=()=> {


  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App;
