import React , {useState} from 'react';
import 'antd/dist/antd.css';
import '../chap.css';
import Cardn from '../Cardn';

import { Card } from 'antd';
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { BsFillUnlockFill } from "react-icons/bs";



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


export default function Nlmadvance() {
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
          
     
             <Link to="/home/71" className="linkstl" ><Card.Grid style={gridStyle}  >1</Card.Grid></Link>
             <Link to="/home/72" className="linkstl" ><Card.Grid style={gridStyle}  >2</Card.Grid></Link>
             <Link to="/home/73" className="linkstl" ><Card.Grid style={gridStyle}  >3</Card.Grid></Link>
             <Link to="/home/74" className="linkstl" ><Card.Grid style={gridStyle}  >4</Card.Grid></Link>
             <Link to="/home/75" className="linkstl" ><Card.Grid style={gridStyle}  >5</Card.Grid></Link>
             <Link to="/home/76" className="linkstl" ><Card.Grid style={gridStyle}  >6</Card.Grid></Link>
             <Link to="/home/77" className="linkstl" ><Card.Grid style={gridStyle}  >7</Card.Grid></Link>
             <Link to="/home/78" className="linkstl" ><Card.Grid style={gridStyle}  >8</Card.Grid></Link>
             <Link to="/home/79" className="linkstl" ><Card.Grid style={gridStyle}  >9</Card.Grid></Link>
             <Link to="/home/80" className="linkstl" ><Card.Grid style={gridStyle}  >10</Card.Grid></Link>
             <Link to="/home/81" className="linkstl" ><Card.Grid style={gridStyle}  >11</Card.Grid></Link>
             <Link to="/home/82" className="linkstl" ><Card.Grid style={gridStyle}  >12</Card.Grid></Link>
             <Link to="/home/83" className="linkstl" ><Card.Grid style={gridStyle}  >13</Card.Grid></Link>
             <Link to="/home/84" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >14</Card.Grid></Link>
             <Link to="/home/85" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >15</Card.Grid></Link>
             <Link to="/home/86" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >16</Card.Grid></Link>
             <Link to="/home/87" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >17</Card.Grid></Link>
             <Link to="/home/88" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >18</Card.Grid></Link>
             <Link to="/home/89" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >19</Card.Grid></Link>
             <Link to="/home/90" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >20</Card.Grid></Link>
             <Link to="/home/91" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >21</Card.Grid></Link>
             <Link to="/home/92" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >22</Card.Grid></Link>
             <Link to="/home/93" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >23</Card.Grid></Link>
             <Link to="/home/94" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >24</Card.Grid></Link>
             <Link to="/home/95" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >25</Card.Grid></Link>
             <Link to="/home/96" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >26</Card.Grid></Link>
             <Link to="/home/97" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >27</Card.Grid></Link>
             <Link to="/home/98" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >28</Card.Grid></Link>
             <Link to="/home/99" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >29</Card.Grid></Link>
             <Link to="/home/100" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >30</Card.Grid></Link>
             <Link to="/home/101" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >31</Card.Grid></Link>
             <Link to="/home/102" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >32</Card.Grid></Link>
             <Link to="/home/103" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >33</Card.Grid></Link>
             <Link to="/home/104" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >34</Card.Grid></Link>
             <Link to="/home/105" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >35</Card.Grid></Link>
             <Link to="/home/106" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >36</Card.Grid></Link>
             <Link to="/home/107" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >37</Card.Grid></Link> 
             <Link to="/home/108" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >38</Card.Grid></Link>
             <Link to="/home/109" className="linkstl" ><Card.Grid style={gridStyle}  >39</Card.Grid></Link>
             <Link to="/home/110" className="linkstl" ><Card.Grid style={gridStyle}  >40</Card.Grid></Link>
             <Link to="/home/111" className="linkstl" ><Card.Grid style={gridStyle}  >41</Card.Grid></Link>
             <Link to="/home/112" className="linkstl" ><Card.Grid style={gridStyle}  >42</Card.Grid></Link>
             <Link to="/home/113" className="linkstl" ><Card.Grid style={gridStyle}  >43</Card.Grid></Link>
             <Link to="/home/114" className="linkstl" ><Card.Grid style={gridStyle}  >44</Card.Grid></Link>
             <Link to="/home/115" className="linkstl" ><Card.Grid style={gridStyle}  >45</Card.Grid></Link>
             <Link to="/home/116" className="linkstl" ><Card.Grid style={gridStyle}  >46</Card.Grid></Link>
             <Link to="/home/117" className="linkstl" ><Card.Grid style={gridStyle}  >47</Card.Grid></Link>
             <Link to="/home/118" className="linkstl" ><Card.Grid style={gridStyle}  >48</Card.Grid></Link>
             <Link to="/home/119" className="linkstl" ><Card.Grid style={gridStyle}  >49</Card.Grid></Link>
             <Link to="/home/120" className="linkstl" ><Card.Grid style={gridStyle}  >50</Card.Grid></Link>
             <Link to="/home/121" className="linkstl" ><Card.Grid style={gridStyle}  >51</Card.Grid></Link>
             <Link to="/home/122" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >52</Card.Grid></Link>
             <Link to="/home/123" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >53</Card.Grid></Link>
             <Link to="/home/124" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >54</Card.Grid></Link>
             <Link to="/home/125" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >55</Card.Grid></Link>
             <Link to="/home/126" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >56</Card.Grid></Link>
             <Link to="/home/127" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >57</Card.Grid></Link>
             <Link to="/home/128" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >58</Card.Grid></Link>
             <Link to="/home/129" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >59</Card.Grid></Link>
             <Link to="/home/130" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >60</Card.Grid></Link>
             <Link to="/home/131" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >61</Card.Grid></Link>
             <Link to="/home/132" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >62</Card.Grid></Link>
             <Link to="/home/133" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >63</Card.Grid></Link>
             <Link to="/home/134" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >64</Card.Grid></Link>
             <Link to="/home/135" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >65</Card.Grid></Link>
             <Link to="/home/136" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >66</Card.Grid></Link>
             <Link to="/home/137" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >67</Card.Grid></Link>
             <Link to="/home/138" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >68</Card.Grid></Link>
             <Link to="/home/139" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >69</Card.Grid></Link>
             <Link to="/home/140" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >70</Card.Grid></Link>
             
             
     
             
        
         </div>
         







      </div>
    </div>
         
     
         


)
}