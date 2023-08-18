import React,{useState} from 'react';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import {Link} from "react-router-dom";
import { SidebarData } from './Sidebardata.js';
function Sidebar() {
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className = "navbar">
                <Link to="#" className='F-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active':'nav-menu'}>

            <ul className='nav-menu-items active' onClick={showSidebar} >
                <li className="navbar-toogle">
                    <Link to="#" className='menu-bars'>
                        <RiIcons.RiCloseCircleLine/>
                    </Link>
                </li>
                {SidebarData.map((items,index) => {
                    return (
                        <li key={index} className={items.cName}>
                            <Link to={items.path}>
                                {items.icon}
                                <span>{items.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
