import React , {useState} from 'react';
import 'antd/dist/antd.css';
import './chap.css';
import Cardn from './Cardn';

import { Card } from 'antd';
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { BsFillUnlockFill } from "react-icons/bs";
import Navbar from './Dashboard/navbar/Navbar';



const gridStyle = {
  width: '25%',
  textAlign: 'center',
  background: '#e6f7ff',
  padding: '25%',
  direction: 'row',

  
};

const linkstyle ={
  direction: 'row' 
}

const Chapters = () => {
  return (

  <>
       <div className='maind'>
           {/* <div className='upperd'>
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
           <div className='lowerd'>

           
                  

           <div className='carddiv'>
                  <div className='carhead'>
                      NEWTON'S LAWS
                      <span className='status'><BsFillUnlockFill/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMadvance">
                         Advance
                    
   </Link>               </div>
                 </div>

                 <div className='carddiv'>
                  <div className='carhead'>
                     KINEMATICS
                      <span className='status'><BsFillUnlockFill/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMbasic">
                         Advance
                    
   </Link>               </div>
                 </div>



                 <div className='carddiv1'>
                  <div className='carhead'>
                      ROTATIONAL MOTION
                      <span className='status'><AiFillLock/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMbasic">
                         Advance
                    
   </Link>               </div>
                 </div>


                 <div className='carddiv'>
                  <div className='carhead'>
                      FLUIDS
                      <span className='status'><BsFillUnlockFill/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMbasic">
                         Advance
                    
   </Link>               </div>
                 </div>


                 <div className='carddiv1'>
                  <div className='carhead'>
                      RAY OPTICS
                      <span className='status'><AiFillLock/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMbasic">
                         Advance
                    
   </Link>               </div>
                 </div>


                 <div className='carddiv'>
                  <div className='carhead'>
                      WORK-POWER-ENERGY
                      <span className='status'><BsFillUnlockFill/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMbasic">
                         Advance
                    
   </Link>               </div>
                 </div>


                 <div className='carddiv1'>
                  <div className='carhead'>
                      ELECTRICITY
                      <span className='status'><AiFillLock/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMbasic">
                         Advance
                    
   </Link>               </div>
                 </div>


                 <div className='carddiv1'>
                  <div className='carhead'>
                      SHM 
                      <span className='status'><AiFillLock/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMbasic">
                         Advance
                    
   </Link>               </div>
                 </div>


                 <div className='carddiv1'>
                  <div className='carhead'>
                      WAVES
                      <span className='status'><AiFillLock/></span>
                  </div>
                  <div className='carbtns'>
                    <Link className='basicbtn' to="/NLMbasic">
                         Basic
                    </Link>
                    <Link className='basicbtn' to="/NLMbasic">
                         Advance
                    
   </Link>               </div>
                 </div>
           </div>
       </div>

  </>

)
}

export default Chapters;

