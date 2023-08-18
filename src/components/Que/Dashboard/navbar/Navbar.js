
import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [lnstl , setlnstl ] = useState('mainmenu' )
  function chstl() {
    setlnstl('mainmenuch');
  }
  return (
    <div className='upperdn2'>
    <div className='upperheadbox'><h1 className='upperhead'>PHYSICS ENGINE</h1> </div>
     
      <div className='menubox'>
      <Link to="/videos" className='mainmenu'>
        Videos
      </Link>
      <Link to="/chapters" className={lnstl} onClick={chstl}>
        Content
      </Link>
      <Link to="/dashboard" className='mainmenu'>
        Dashboard
        </Link>
        <Link to="/feedback" className='mainmenu'>
        Feedback
        </Link>
        </div>
</div>
  )
}