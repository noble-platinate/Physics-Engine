// import { View, Text } from 'react-native'
import React from 'react'
import './chap.css';
import { AiFillLock } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";
export default function Cardn() {
  return (
    <div className='carddiv'>
                  <div className='carhead'>
                      NEWTON'S LAWS
                      <span className='status'><AiFillUnlock/></span>
                  </div>
                  <div className='carbtns'>
                    <div className='basicbtn'>
                         Basic
                    </div>
                    <div className='basicbtn'>
                         Advance
                    </div>
                  </div>
                 </div>
  )

}

// import { View, Text } from 'react-native'
// import React from 'react'
// import { useState } from 'react';

// import './chap.css';
// import { AiFillLock } from "react-icons/ai";
// import { AiFillUnlock } from "react-icons/ai";
// export default function Cardn(props) {
//   const[stastl ,setstastl] = useState("status1");
//   const[cardstl ,setcardstl] = useState("carddiv");
//   if(props.sta == "1"){
//     setstastl("status2");
//     setcardstl("carddiv1");
//   }
//   return (
//     <div className={cardstl}>
//                   <div className='carhead'>
//                       {props.name}
//                       <span className='status3'><AiFillUnlock/></span>
//                       <span className="stastl"><AiFillLock/></span>
                      
//                   </div>
//                   <div className='carbtns'>
//                     <div className='basicbtn'>
//                          Basic
//                     </div>
//                     <div className='basicbtn'>
//                          Advance
//                     </div>
//                   </div>
//                  </div>
//   )
// }