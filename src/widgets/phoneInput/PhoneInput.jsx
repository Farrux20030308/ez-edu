import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";
import './assets/App.css'

const PhoneInput=()=> {
 <>
 <div className='box'>
 <input type="text" />

 </div>
 </>
  const [value, setValue] = useState()
  return (
    <PhoneInput
  international
  defaultCountry="RU"
  value={value}
  onChange={setValue}/>
  )
}
export default PhoneInput;