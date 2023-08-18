import React from 'react'
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Chapters',
        path:'/chapters',
        icon: <FiIcons.FiBookOpen/>,
        cName:'nav-text'
    },
    {
        title:'Cool Stuffs',
        path:'/coolstuffs',
        icon: <AiIcons.AiOutlineNodeIndex/>,
        cName:'nav-text'
    },
    {
        title:'Practice',
        path:'/practice',
        icon: <GiIcons.GiBookCover/>,
        cName:'nav-text'
    }
]