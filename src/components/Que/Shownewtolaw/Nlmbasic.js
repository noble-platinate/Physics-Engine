import React , {useState} from 'react';
import 'antd/dist/antd.css';
// import '../chap.css';
// import Cardn from '../Cardn'

import { Card } from 'antd';
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { BsFillUnlockFill } from "react-icons/bs";
import './Presentque.css';



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


export default function Nlmbasic() {
  return (
 
       <div className='presentmain'>
         <div className='headname'>
              PHYSICS ENGINE 
         </div>
         <div className='chapname'>
             <span className='chname'>NEWTON'S LAWS</span>
         </div>
         <div className='preques'>

         <div className="ques">
              
              
        
                <Link to="/home/1" className="linkstl" ><Card.Grid style={gridStyle}  >1</Card.Grid></Link>
                <Link to="/home/2" className="linkstl" ><Card.Grid style={gridStyle}  >2</Card.Grid></Link>
                <Link to="/home/3" className="linkstl" ><Card.Grid style={gridStyle}  >3</Card.Grid></Link>
                <Link to="/home/4" className="linkstl" ><Card.Grid style={gridStyle}  >4</Card.Grid></Link>
                <Link to="/home/5" className="linkstl" ><Card.Grid style={gridStyle}  >5</Card.Grid></Link>
                <Link to="/home/6" className="linkstl" ><Card.Grid style={gridStyle}  >6</Card.Grid></Link>
                <Link to="/home/7" className="linkstl" ><Card.Grid style={gridStyle}  >7</Card.Grid></Link>
                <Link to="/home/8" className="linkstl" ><Card.Grid style={gridStyle}  >8</Card.Grid></Link>
                <Link to="/home/9" className="linkstl" ><Card.Grid style={gridStyle}  >9</Card.Grid></Link>
                <Link to="/home/10" className="linkstl" ><Card.Grid style={gridStyle}  >10</Card.Grid></Link>
                <Link to="/home/11" className="linkstl" ><Card.Grid style={gridStyle}  >11</Card.Grid></Link>
                <Link to="/home/12" className="linkstl" ><Card.Grid style={gridStyle}  >12</Card.Grid></Link>
                <Link to="/home/13" className="linkstl" ><Card.Grid style={gridStyle}  >13</Card.Grid></Link>
                <Link to="/home/14" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >14</Card.Grid></Link>
                <Link to="/home/15" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >15</Card.Grid></Link>
                <Link to="/home/16" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >16</Card.Grid></Link>
                <Link to="/home/17" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >17</Card.Grid></Link>
                <Link to="/home/18" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >18</Card.Grid></Link>
                <Link to="/home/19" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >19</Card.Grid></Link>
                <Link to="/home/20" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >20</Card.Grid></Link>
                <Link to="/home/21" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >21</Card.Grid></Link>
                <Link to="/home/22" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >22</Card.Grid></Link>
                <Link to="/home/23" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >23</Card.Grid></Link>
                <Link to="/home/24" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >24</Card.Grid></Link>
                <Link to="/home/25" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >25</Card.Grid></Link>
                <Link to="/home/26" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >26</Card.Grid></Link>
                <Link to="/home/27" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >27</Card.Grid></Link>
                <Link to="/home/28" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >28</Card.Grid></Link>
                <Link to="/home/29" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >29</Card.Grid></Link>
                <Link to="/home/30" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >30</Card.Grid></Link>
                <Link to="/home/31" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >31</Card.Grid></Link>
                <Link to="/home/32" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >32</Card.Grid></Link>
                <Link to="/home/33" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >33</Card.Grid></Link>
                <Link to="/home/34" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >34</Card.Grid></Link>
                <Link to="/home/35" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >35</Card.Grid></Link>
                <Link to="/home/36" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >36</Card.Grid></Link>
                <Link to="/home/37" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >37</Card.Grid></Link> 
                <Link to="/home/38" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >38</Card.Grid></Link>
                <Link to="/home/39" className="linkstl" ><Card.Grid style={gridStyle}  >39</Card.Grid></Link>
                <Link to="/home/40" className="linkstl" ><Card.Grid style={gridStyle}  >40</Card.Grid></Link>
                <Link to="/home/41" className="linkstl" ><Card.Grid style={gridStyle}  >41</Card.Grid></Link>
                <Link to="/home/42" className="linkstl" ><Card.Grid style={gridStyle}  >42</Card.Grid></Link>
                <Link to="/home/43" className="linkstl" ><Card.Grid style={gridStyle}  >43</Card.Grid></Link>
                <Link to="/home/44" className="linkstl" ><Card.Grid style={gridStyle}  >44</Card.Grid></Link>
                <Link to="/home/45" className="linkstl" ><Card.Grid style={gridStyle}  >45</Card.Grid></Link>
                <Link to="/home/46" className="linkstl" ><Card.Grid style={gridStyle}  >46</Card.Grid></Link>
                <Link to="/home/47" className="linkstl" ><Card.Grid style={gridStyle}  >47</Card.Grid></Link>
                <Link to="/home/48" className="linkstl" ><Card.Grid style={gridStyle}  >48</Card.Grid></Link>
                <Link to="/home/49" className="linkstl" ><Card.Grid style={gridStyle}  >49</Card.Grid></Link>
                <Link to="/home/50" className="linkstl" ><Card.Grid style={gridStyle}  >50</Card.Grid></Link>
                <Link to="/home/51" className="linkstl" ><Card.Grid style={gridStyle}  >51</Card.Grid></Link>
                <Link to="/home/52" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >52</Card.Grid></Link>
                <Link to="/home/53" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >53</Card.Grid></Link>
                <Link to="/home/54" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >54</Card.Grid></Link>
                <Link to="/home/55" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >55</Card.Grid></Link>
                <Link to="/home/56" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >56</Card.Grid></Link>
                <Link to="/home/57" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >57</Card.Grid></Link>
                <Link to="/home/58" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >58</Card.Grid></Link>
                <Link to="/home/59" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >59</Card.Grid></Link>
                <Link to="/home/60" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >60</Card.Grid></Link>
                <Link to="/home/61" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >61</Card.Grid></Link>
                <Link to="/home/62" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >62</Card.Grid></Link>
                <Link to="/home/63" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >63</Card.Grid></Link>
                <Link to="/home/64" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >64</Card.Grid></Link>
                <Link to="/home/65" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >65</Card.Grid></Link>
                <Link to="/home/66" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >66</Card.Grid></Link>
                <Link to="/home/67" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >67</Card.Grid></Link>
                <Link to="/home/68" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >68</Card.Grid></Link>
                <Link to="/home/69" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >69</Card.Grid></Link>
                <Link to="/home/70" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >70</Card.Grid></Link>
                
                
        
                
          
            </div>
            







         </div>
       </div>
            
        
            


  )
}












