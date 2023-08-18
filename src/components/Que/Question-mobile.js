import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { questionData } from './../old code/Questions/Questiondata.js';
import ReactPlayer from "react-player";
import Steps from './Steps';
import './question.css'
import 'antd/dist/antd.css';
import { Row, Col, Button, Form, Radio, Alert, message } from 'antd';
import constraint from './constraint.mp3'
import { useParams } from 'react-router';
import { FcApproval , FcDisapprove} from "react-icons/fc";
import { Header } from 'antd/lib/layout/layout.js';
import Back from "./Back";
import ginone from './AUDIOS/stepOne/step_one_audioek.mp3'
import { Link } from 'react-router-dom'
// import { Card } from 'antd';
// import { Link } from "react-router-dom";
// import Audiogaurav from './Audiogaurav.js';
import {  Drawer,  Space } from 'antd';
import './Question-mobile.css'
import { FcTimeline } from 'react-icons/fc'
import { OrderedListOutlined } from '@ant-design/icons';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,

} from 'reactstrap';
import TestThree from './animated.js';
import { GiPlayerBase } from 'react-icons/gi';
var Latex = require('react-latex');



const QuestionsM = (props) => {
    const [form] = Form.useForm();
    const { quesId } = useParams();
    const quesNo = parseInt(quesId)-1;
    const [stepSelected, setStepSelected] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const chapterNumber = 1;
    const questionNumber = quesId;
    const chapterDetails = questionData.filter(chapter => chapter.chapterNumber == chapterNumber)[parseInt(quesId)-1];
    const questionDetails = chapterDetails.questions.filter(question => question.questionNumber == questionNumber)[0];
    const [stepCount, setStepCount] = useState(0);
    const [currentQue, setcurrentQue] = useState(0);
    const [step, setSteps] = useState(questionData[parseInt(quesId)-1].steps);
    const stepDetails = questionDetails.steps.filter(step => step.stepNumber === stepSelected)[0];
    const [showError, setShowError] = useState(false)
    const [showPrint, setShowPrint] = useState(false);
    const [start, setStart] = useState(false);
    const [answerClicked, setAnswerClicked] = useState(0)
    const [iscorrect, setIscorrect] = useState(false)
    //this right wrong is for icon coming on choosing option 
    const [right, setright] = useState("heart");
    const [wrong , setwrong] = useState("heart");
    const [backstl , setbackstl] = useState("bac");
    const [advtobas , setadvtobas] = useState(0);
    const [showoldprint , setshowoldprint] = useState(false)
    const [countnn,setcountnn] = useState(0);
    const [bgfchead , setbgfchead] = useState("white")
     const [click , setclick] = useState(5);


     const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('left');

  const showDrawer = () => {
    setVisible(true);
  };
  const notshowDrawer = () => {
    setVisible(false);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };
    // var colors = ["red","blue","green"];
    // localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
    // var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back
    // console.log("printing local storage");
    // console.log(storedColors);

    
    useEffect(() => {
        // console.log(stepDetails)
        //  debugger
       
        console.log(quesId)

    }, [])

    const changeStep = (data) => {
        //debugger;
        setStepSelected(data.stepNumber);


    }
     
   

    var gplayer = document.getElementById('gsound');

    //function for advancee to basic starts
    // var threejstep;
    //  function advancetobasic() {
    //     setadvtobas(1);
    //     threejstep = "fbd"
    //  }
    //  if(advtobas==0){
    //     threejstep = stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep
    //  }
     

    //function for advancee to basic ends
    // codes for spinning right wrong icons 
    function correct() {setwrong("heart"); setright("hearta"); 
             setTimeout(() => { setright("heartb")
               
             }, 500);
             gplayer.src = ginone;
             gplayer.play();
             

  
  }
    function incorrect() {setright("heart");  setwrong("hearta"); 
    setTimeout(() => { setwrong("heartb")
      
    }, 500);}

   
   var corans;
    const checkAnswer = () => {
        //  debugger
        let ansGiven = form.getFieldValue('answer');
        let correctAnsIndex = stepDetails?.stepQuestions[currentQue].answer
        
        let correctAns = stepDetails?.stepQuestions[currentQue].options[correctAnsIndex]
        corans = correctAns;
        if (ansGiven === correctAns) {
            //setcurrentQue(currentQue + 1)

            // message.success('Correct');
            correct();
            setShowPrint(true);
            setcountnn(1);
            setclick(5);
            
        } else {
            // message.error('Opps! Try Again');
            incorrect();
           
        }
        setIscorrect(ansGiven === correctAns);
        setAnswerClicked(answerClicked + 1);
        
      
    }

    var rcnt=0;
    var shownarray = [];
    var colorarray = [];
    const noOfSteps = stepDetails.stepQuestions.length;
    for (let i = 0; i < noOfSteps; i++) {

        shownarray[i] = stepDetails.stepQuestions[i].tobeshown;
        colorarray[i] = stepDetails.stepQuestions[i].showfcheading;
    }

    // if(currentQue == 1){
    //     setshowoldprint(true);
    // }
    // else {
    //     setshowoldprint(false);
    // }

    // var currentquen=currentQue+1;
    // var currentquenn=currentQue+2;
    // var currentquennn=currentQue+3;
    // shownarray[0] = stepDetails.stepQuestions[currentQue].tobeshown;
    // shownarray[1] = stepDetails.stepQuestions[currentquen].tobeshown;
    // shownarray[2] = stepDetails.stepQuestions[currentquen+1].tobeshown;
    // shownarray[3] = stepDetails.stepQuestions[currentquenn+1].tobeshown;
     
    
        // var changeQuetion = () => {
        //     var shown = stepDetails.stepQuestions[currentQue].tobeshown;
        //     form.setFieldsValue({ answer: '' });
        //     const noOfSteps = stepDetails.stepQuestions.length;
        //     setShowPrint(false)
        //     if (currentQue + 1 === noOfSteps) {
        //         //change the step
        //         let newStep = [...step];
        //         var c = stepCount;
        //         setStepCount(stepCount + 1);
        //         newStep[c].stepStatus = 'inactive';
        //         newStep[c + 1].stepStatus = 'active';
        //         setSteps(newStep);
        //         setcurrentQue(0)
        //         setStepSelected(stepSelected + 1)
        //     } 
        //     else {
            // for (let index = 0; index < 4; index++) {
            //     if(shownarray[index]==0){
            //         rcnt++;
            //     }
            //     else{
            //         setcurrentQue(currentQue + rcnt);
            //         rcnt=0;
            //     }
                
            // }
            //     if(shown == 0) {
            //         rcnt++;
            //         currentQue++;
            //         shown = stepDetails.stepQuestions[currentQue].tobeshown;
            //     }
            //     let shown = stepDetails.stepQuestions[currentQue].tobeshown;
            //      if(shown==0){
            //         rcnt++;
            //         currentQue=currentQue+1;
            //     }
                
            //   if(shown==1){
            //     setcurrentQue(currentQue + 1);
            //     rcnt=0;
            //   }
        //     if(iscorrect==true && shown == 1)
        //     {
        //     for (var kb = currentQue+1; kb < noOfSteps; kb++) {
                
        //         if(shownarray[kb]==1) {
        //             break;
        //         }  
                
        //     }
            
        //     if(kb < noOfSteps){
        //         setcurrentQue(kb);
        //     }
        //     else{
        //         //change the step
        //         let newStep = [...step];
        //         var c = stepCount;
        //         setStepCount(stepCount + 1);
        //         newStep[c].stepStatus = 'inactive';
        //         newStep[c + 1].stepStatus = 'active';
        //         setSteps(newStep);
        //         setcurrentQue(0)
        //         setStepSelected(stepSelected + 1)
        //     }
        // }
        // else {
        //     setcurrentQue(currentQue + 1); 
        // }
                // if(shownarray[1]==1) {
                //     setcurrentQue(currentQue + 1)
                // }  
                // if(shownarray[1]==0) {
                //     setcurrentQue(currentQue + 2)
                // }       
    
                // if(shown){setcurrentQue(currentQue + 1)}
                // if(!shown){setcurrentQue(currentQue + 4)}
                // setcurrentQue(currentQue + 1);
                // setcurrentQue(currentQue + 1);
                // if(shown == 0){
                //     setcurrentQue(currentQue + 1);
                //     changeQuetion();
                //  }
                // if(shown == 1){
                //     setcurrentQue(currentQue + 1);
                // }
                // setcurrentQue(currentQue + 1); 
        //     }
                
            
        //     setAnswerClicked(0)
        //     setIscorrect(false)
        //     setright("heart")
        //     setwrong("heart")
    
        // }

    const bgcolor = () => {
        var fhead = colorarray[currentQue+1];
        if(fhead == "Red block") {
            setbgfchead("red");
        }
        else if(fhead == "Blue block") {
            setbgfchead("blue");
        }
        else if(fhead == "Yellow block") {
            setbgfchead("yellow");
        }
        else if(fhead == "Green block") {
            setbgfchead("green");
        }
        else if(fhead == "Second pulley"){
            setbgfchead("white");
        }
        else {
            setbgfchead("white");
        }
       
    }

   
    var changeQuetion = () => {
  
        
        setcountnn(1);
        var shown = stepDetails.stepQuestions[currentQue].tobeshown;
        form.setFieldsValue({ answer: '' });
        const noOfSteps = stepDetails.stepQuestions.length;
        setShowPrint(false);
        // bgcolor();

        if (currentQue + 1 === noOfSteps) {
            //change the step
            let newStep = [...step];
            var c = stepCount;
            setStepCount(stepCount + 1);
            newStep[c].stepStatus = 'inactive';
            newStep[c + 1].stepStatus = 'active';
            setSteps(newStep);
            setcurrentQue(0);
           
            setStepSelected(stepSelected + 1);
           
        } else {
        // for (let index = 0; index < 4; index++) {
        //     if(shownarray[index]==0){
        //         rcnt++;
        //     }
        //     else{
        //         setcurrentQue(currentQue + rcnt);
        //         rcnt=0;
        //     }
            
        // }
        //     if(shown == 0) {
        //         rcnt++;
        //         currentQue++;
        //         shown = stepDetails.stepQuestions[currentQue].tobeshown;
        //     }
        //     let shown = stepDetails.stepQuestions[currentQue].tobeshown;
        //      if(shown==0){
        //         rcnt++;
        //         currentQue=currentQue+1;
        //     }
            
        //   if(shown==1){
        //     setcurrentQue(currentQue + 1);
        //     rcnt=0;
        //   }
        if(iscorrect==true && shown == 1)
        {
        for (var kb = currentQue+1; kb < noOfSteps; kb++) {
            
            if(shownarray[kb]==1) {
                break;
            }  
            
        }
        
        if(kb < noOfSteps){
            setcurrentQue(kb);
        
            
        }
        else{
            //change the step
            let newStep = [...step];
            var c = stepCount;
            setStepCount(stepCount + 1);
            newStep[c].stepStatus = 'inactive';
            newStep[c + 1].stepStatus = 'active';
            setSteps(newStep);
            setcurrentQue(0);
          
            setStepSelected(stepSelected + 1);
        

        }
    }
    else {
       
        setcurrentQue(currentQue + 1); 
       
    }
            // if(shownarray[1]==1) {
            //     setcurrentQue(currentQue + 1)
            // }  
            // if(shownarray[1]==0) {
            //     setcurrentQue(currentQue + 2)
            // }       

            // if(shown){setcurrentQue(currentQue + 1)}
            // if(!shown){setcurrentQue(currentQue + 4)}
            // setcurrentQue(currentQue + 1);
            // setcurrentQue(currentQue + 1);
            // if(shown == 0){
            //     setcurrentQue(currentQue + 1);
            //     changeQuetion();
            //  }
            // if(shown == 1){
            //     setcurrentQue(currentQue + 1);
            // }
        }
            
        
        setAnswerClicked(0);
        setIscorrect(false);
        setright("heart");
        setwrong("heart");
        // bgcolor();
        
       

    }
         
     var fchead = stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].showfcheading;

    // this set show is now present in check answer
    const onChangeAns = () => {
        setShowPrint(true)
    }
    const answerChange = (e) => {
        e.preventDefault();
        const val = parseInt(e.target.value);
        if (e.target.type == "radio")
            setSelectedAnswer(val);
        else {
            // check if that number exists in selected answer
            const exists = selectedAnswer.includes(val);
            let d = [];
            //If exists then filter
            if (exists) {
                d = selectedAnswer.filter(data => data != val);

            }//if not present then append
            else {
                d = selectedAnswer.concat(val);
            }
            setSelectedAnswer(d);
        }
        e.preventDefault();
    }
    const handleStart = () => {
        setStart(true);
        setbackstl("backstylehide")
    }
    const handleStop = () => {
        setStart(false);
    }
    var fcheading = stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].threejsstep;
    var fclen = stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].showfc.length;
    function trialsh() {
        for(let inde=0 ; inde < fclen ; inde++ ){
            <div className='print' style={{fontWeight:"bold"}}
                            >stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].showfc[inde]</div>
        }
    }

      

    return (
        <Container className='impcont' >
        {/* <h1>hello</h1> */}
        {/* <h1 className='chaame'>Newton's Laws</h1> */}
              {/* <audio src="" id="gsound" class="hidden" preload="none"></audio> */}
            <Form form={form} onFinish={checkAnswer}  >
                <Row>
                <Button  onClick={showDrawer}>
                <OrderedListOutlined />
        </Button>
                <Drawer title={<><span style={{marginRight:10}}>Stepvise Navigation    </span><Button type="primary" onClick={notshowDrawer}>
          close
        </Button></>}
                      placement={placement}
                       closable={false}
                      onClose={onClose}
                       visible={visible}
                      key={placement}
                   >
                   
                    <Col span={6} >
                   

                                                 {/* <Radio questionDetails={questionDetails} stepDetails={stepDetails} steps={step} changeStep={changeStep} /> */}
         
 
                        <Steps   direction="vertical" current={1} questionDetails={questionDetails} stepDetails={stepDetails} steps={step} changeStep={changeStep}  />
                        <Col span={24} >
                        <div className='print' style={{fontWeight:"bold" , textAlign:"center" , backgroundColor:bgfchead
                                     }}
                                                >{fchead}</div>
                        
                      
                        
                        { stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].showfc.map((data, idx) => (
                                                
                                                <div className='print' style={{fontWeight:"bold"}}
                                                >{data}</div>
                                            ))}
                                            </Col>
                    </Col>
                    {/* .. */}
                </Drawer>   
                    
                    <Col span={16} >
                        <Row className="answers">
                            <Col span={24} >
                            {/* <Back className = {backstl} /> */}
                            {/* <Link to="/login"    ><Button  type="primary" > Back </Button></Link> */}
                                <div className="questi">
                                
                                    <div>Question 1</div>
                                    <div>
                                        {questionData[quesNo].questions[0].questionDesc}
                                    </div>
                                </div>
                                <Button type="primary" onClick={handleStart}> Start </Button>
                                
                                {/* <Button type="primary" onClick={handleStop}> Stop </Button> */}

                            </Col>
                            {start &&
                                <>
                                    <Col>
                                        <Card className="flex-row" >
                                            <CardBody>
                                                <CardTitle>Simulation</CardTitle>
                                                <div className="three">
                                                    <TestThree
                                                        //   threejsstep = {threejstep}
                                                        threejsstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep}
                                                        threejssubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubstep}
                                                        threejssubsubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubsubstep}
                                                        answerClicked={answerClicked}
                                                        iscorrect={iscorrect}
                                                        qno = {quesNo}
                                                        atob = {advtobas}
                                                        stepans={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].options[stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].answer]}
                                                        click = {click}
                                                        type={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].type}
                                                    />
                                                    {/* <Audiogaurav 
                                                        threejsstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep}
                                                        threejssubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubstep}
                                                        // threejssubsubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubsubstep}
                                                        // answerClicked={answerClicked}
                                                        // iscorrect={iscorrect}
                                                        // qno = {quesNo}
                                                        
                                                        // stepans={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].options[stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].answer]}
                                                    /> */}

                                                    {/* <iframe src='./sample.mp4'
                                                frameborder='0'
                                                allow='autoplay; encrypted-media'
                                                allowfullscreen
                                                title='video'
                                            /> */}
                                                    {/* <source src="./sample.mp4" type="video/mp4" /> */}
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col span={20} className="question">

                                        <Col span={24} className="que">
                                            <Card>
                                                <CardBody>
                                                    <h3 className='stepheading'>{stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep}</h3>
                                                    <CardTitle> {currentQue + 1} {stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].question}</CardTitle>
                                                    <CardText>
                                                        <Form.Item
                                                            name="answer"
                                                            rules={[{ required: true, message: 'Please select any option.' }]}
                                                        >
                                                         {/* onChange={onChangeAns} is now in check answer it self */}
                                                            <Radio.Group  onChange={checkAnswer} >
                                                                {stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].options.map((data, idx) => (
                                                                    <Radio value={data} name={data}  className="myRadio"
                                                                    >{data}</Radio>
                                                                ))}
                                                            </Radio.Group>
                                                        </Form.Item>
                                                        {showError &&
                                                            <Alert
                                                                message="oops! Try Again" type="error" showIcon
                                                            />}


                                                        <Button type="primary" htmlType="submit">Answer Status</Button>
                                                        
                                                        <span className="tr1"><FcApproval className={right}/></span>
                                                        <span className="tr2"><FcDisapprove  className={wrong}/> </span>

                                                    </CardText>
                                                </CardBody>

                                            </Card>

                                        </Col>
                                        <Col span={24} className="eqa">
                                            <h4>Observations</h4>
                                            {/* {stepDetails &&  stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show} */}
                                            {/* {stepDetails &&  stepDetails.stepQuestions[currentQue] &&
                                         stepDetails?.stepQuestions[currentQue].show.map((item,index)=>{
                                            <h6>"hello"</h6>
                                        })} */}

                                        
                                            {/* { !currentQue && showPrint && stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show.map((data, idx) => (
                                                
                                                <div className='print' style={{fontWeight:"bold"}}
                                                >{data}</div>
                                            ))}
                                         */}
                                         {/* { countnn!=0 && currentQue==0  && stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show.map((data, idx) => (
                                                
                                                <div className='print' style={{fontWeight:"bold"}}
                                                >{data}</div>
                                            ))} */}

                                        {!showPrint   && stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show1.map((data, idx) => (
                                                
                                                <div className='intfc' style={{fontWeight:"bold"}}
                                                >{data}</div>
                                            ))}
                                            {showPrint   && stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show2.map((data, idx) => (
                                                
                                                <div className='intfc' style={{fontWeight:"bold"}}
                                                >{data}</div>
                                            ))}
                                           


                                            {/* {showPrint && currentQue!=0 && stepDetails && stepDetails.stepQuestions[currentQue+1] && stepDetails?.stepQuestions[currentQue+1].show.map((data, idx) => (
                                                
                                                <div className='print' style={{fontWeight:"bold"}}
                                                >{data}</div>
                                            ))} */}

                                            {/* {currentQue+1==noOfSteps && showPrint && stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show.map((data, idx) => (
                                                
                                                <div className='print' style={{fontWeight:"bold"}}
                                                >{data}</div>
                                            ))} */}
                                            
                                              {/* {
                                                
                                                 storedColors = JSON.parse(localStorage.getItem("my_colors")),
                                                storedColors.map((item ,idx) => (<div className='print' style={{fontWeight:"bold"}}
                                                >{item}</div>))
                                             }  */}
                                              

                                           
                                            {/* <Latex>
                                        {showPrint &&  stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].equation}
                                    </Latex> */}

                                        </Col>
                                        {/* <Button type="primary" className='nextQue' onClick={changeQuetion}>Next Step</Button> */}
                                        {(stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep== "finalanswer") ? <Link to="/chapters"><Button type="primary" className='nextQue' onClick={changeQuetion}>Stop</Button></Link> : <Button type="primary" className='nextQue' onClick={changeQuetion}>Next step</Button> }

                                    </Col>

                                </>

                            }
                        </Row>
                    </Col>
                </Row>

            </Form>

        </Container >
    )
}

export default QuestionsM
