
import React from 'react'
import Content from './content/Content'
import './Home.css'
import Navbar from './navbar/Navbar'
// all components come to this file then this component Home.js goes to app.js 
export default function Home() {
  return (
    <div className='main'>
          <Navbar/>
          <Content/>
    </div>
  )
}