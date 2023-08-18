
import React from 'react'
import { Link } from 'react-router-dom'
import vid from './newtonlawvideo.mp4'
import "./chapvid.css"
import Navbar from '../Dashboard/navbar/Navbar'

export default function chaptervid() {
  return (
   <div>
   {/* <div className='upperdn2'>
   <div className='upperheadbox'><h1 className='upperhead'>PHYSICS ENGINE</h1> </div>
    
     <div className='menubox'>
     <Link to="/videos" className='mainmenu'>
       Course Overview
     </Link>
     <Link to="/chapters" className='mainmenu'>
       Content
     </Link>
     <Link to="/dashboard" className='mainmenu'>
       Dashboard
       </Link>
       <Link to="/feedback" className='mainmenu'>
       Feedback
       </Link>
       </div>
</div> */}
<Navbar/>
        <div className='videocont'>
        <h1 className='stepheading'>NEWTON'S LAW</h1>

<video className='videogal' controls >
      <source   src={vid} type="video/mp4"/>
     </video>


     </div>
     <div className='videocont'>
        <h1 className='stepheading'>KINEMATICS</h1>

<video className='videogal'controls >
      <source   src={vid} type="video/mp4"/>
     </video>


     </div>
     <div className='videocont'>
        <h1 className='stepheading'>SHM</h1>

<video className='videogal' controls >
      <source   src={vid} type="video/mp4"/>
     </video>


     </div>

</div>  )
}