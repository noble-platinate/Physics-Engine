//content.js file consits the body part (whole body except navbar)
import React from "react";
import "./Content.css";
import "./modalform.css";
import "./Rightbar.css";
//importing icons via npm install react-icons --save
import { FiBarChart } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import { IoBookmarksOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import Map from "./Graph/Map";
import Piegraph from "./Graph/Piegraph";
import { graphdata } from "./Graph/graphdata";


// map file contains the comparison graph
// piegraph file contains pie graph for score analysis

export default function Content() {
  // this states is for syllabus vise analysis progress bar
  const [valn1, setvaln1] = useState(0);
  const [valn2, setvaln2] = useState(0);
  const [valn3, setvaln3] = useState(0);
  const [valn4, setvaln4] = useState(0);
  function fun() {
    setvaln1(80);
    setvaln2(60);
    setvaln3(24);
    setvaln4(96);
  }
  const mdata = graphdata[0]
  const step1correct = mdata.steponecorrect;
  const step2correct = mdata.steptwocorrect;
  const step3correct = mdata.stepthreecorrect;
  const step4correct = mdata.stepfourcorrect;
  const step5correct = mdata.stepfivecorrect;
  const attempt = mdata.attempted;
  const corr = mdata.quescorrect;

  // r is variable for rank , p: percentile , s:score

  // using use ref for taking the values of input from modal
  //using use state to update value
  const [r, setr] = useState(1200);
  const [p, setp] = useState(12);
  const [s, sets] = useState(12);
  const rank = useRef(1234);
  const percentile = useRef(12);
  const score = useRef(13);
  const submitform = (e) => {
    e.preventDefault();
    console.log(rank.current.value);
    console.log(percentile.current.value);
    console.log(score.current.value);
    setr(rank.current.value);
    setp(percentile.current.value);
    sets(score.current.value);
  };

  setTimeout(fun, 1500);

  return (
    <div className="content">



                           

























    
      {/* <div className="sidebar"> */}
        {/* <button className="sidebarbtn">
          <FiBarChart /> Dashboard
        </button>
        <button className="sidebarbtn , activebtn">
          <IoBookmarksOutline /> Skill Tests
        </button>
        <button className="sidebarbtn">
          <AiOutlineFile /> Internships
        </button> */}
      {/* </div> */}

      {/* skilltest div is mid part of our window which UPDATE div , QUICKSTATS div , COMPARISION GRAPH div */}
      {/* style coming from content.css */}
      <div className="skilltest">
        Analysis
      <div></div>
        <div className="graph , outline">
          <div className="grapheading">
            <h4 style={{ fontfamily: "georgia" }}>Stepwise Analysis</h4>
          </div>
          <div className="grapbody">
            <span className="darker">You have attempted {attempt} questions </span>{" "}
            this graph shows performance in each step in overall attempted
            questions
          </div>
          <Map c1= {step1correct}
                c2= {step2correct}
                c3= {step3correct}
                c4= {step4correct}
                c5= {step5correct}
        
         
         />
          {/* in this graph div map is coming from Graph folder's map.js file percentile is sent as props to map.js  */}

          {/* this is MODAL for taking the values for updation */}

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            
          </div>
        </div>
      </div>

      {/* this is rightest part of our window RIGHTOUTBOX div which have two main divs SYLLABUS div , PIEGRAPH DIV */}
      <div className="rightoutbox">
      <div className="syllabus">
          <div className="sylheading">
            {" "}
            <h4>Chapter wise Analysis</h4>
          </div>
          
          <div className="box">
            <div>NEWTON'S LAWS</div>
            <div>
              <progress
                value={valn1}
                className="progress1"
                max="100"
              ></progress>
              <span
                className="val"
                style={{ color: "blue", fontWeitht: "bold" }}
              >
                80%
              </span>
            </div>
          </div>

          <div className="box">
            <div> KINEMATICS</div>
            <div>
              <progress
                className="progress2"
                value={valn2}
                max="100"
              ></progress>
              <span
                className="val"
                style={{ color: "orange", fontWeitht: "bold" }}
              >
                60%
              </span>
            </div>
          </div>

          <div className="box">
            <div> SHM</div>
            <div>
              <progress
                className="progress3"
                value={valn3}
                max="100"
              ></progress>
              <span
                className="val"
                style={{ color: "red", fontWeitht: "bold" }}
              >
                24%
              </span>
            </div>
          </div>

          <div className="box">
            <div>ROTATIONAL MOTION</div>
            <div>
              <progress
                className="progress4"
                value={valn4}
                max="100"
              ></progress>
              <span
                className="val"
                style={{ color: "green", fontWeitht: "bold" }}
              >
                96%
              </span>
            </div>
          </div>
      </div>
          

        {/* in this graph div PIEGRAPH is coming from Graph folder's piegraph.js file ,score is sent as props to piegraph.js  */}
        <div className="piegraph">
          <div className="pieheading">
            <h4>
              Questions Analysis <span className="marks">{corr}/{attempt}</span>
            </h4>
            <div className="discription">
              <span className="darker">
                You scored {corr} ques correct out of {attempt}
              </span>
              .However it still needs some improvements
            </div>
            <div>
              <Piegraph score={corr} totalques = {attempt} />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
