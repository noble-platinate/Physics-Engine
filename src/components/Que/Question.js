import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { questionData } from './../old code/Questions/Questiondata.js';
import Steps from './StepsComponent/Steps.js';
import ChatGptInput from './GptInputComponent/gptInput.js';
import './question.css'
import { Row, Col, Button, Form, Radio, Alert, message, Input, Space } from 'antd';
import { useParams } from 'react-router';
import { FcApproval, FcDisapprove } from "react-icons/fc";
import ginone from './AUDIOS/stepOne/step_one_audioek.mp3'
import { Link } from "react-router-dom";

import {
    Card,
    CardBody,
    CardText,
    CardTitle,

} from 'reactstrap';
import TestThree from './animated.js';
var Latex = require('react-latex');

const Questions = (props) => {
    const [form] = Form.useForm();
    const { quesId } = useParams();
    const quesNo = parseInt(quesId) - 1;
    const [stepSelected, setStepSelected] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const chapterNumber = 1;
    const questionNumber = quesId;
    const chapterDetails = questionData.filter(chapter => chapter.chapterNumber == chapterNumber)[parseInt(quesId) - 1];
    const questionDetails = chapterDetails.questions.filter(question => question.questionNumber == questionNumber)[0];
    const [stepCount, setStepCount] = useState(0);
    const [currentQue, setcurrentQue] = useState(0);
    const [step, setSteps] = useState(questionData[parseInt(quesId) - 1].steps);
    const stepDetails = questionDetails.steps.filter(step => step.stepNumber === stepSelected)[0];
    const [showError, setShowError] = useState(false)
    const [showPrint, setShowPrint] = useState(false);
    const [start, setStart] = useState(false);
    const [answerClicked, setAnswerClicked] = useState(0)
    const [iscorrect, setIscorrect] = useState(false)
    const [right, setright] = useState("heart");
    const [wrong, setwrong] = useState("heart");
    const [advtobas, setadvtobas] = useState(0);
    const [bgfchead, setbgfchead] = useState("white")
    const [click, setclick] = useState(5);

    const changeStep = (data) => {
        setStepSelected(data.stepNumber);
        setcurrentQue(0);
        setAnswerClicked(0);
        setIscorrect(false);
        setright("heart");
        setwrong("heart");
        form.setFieldsValue({ answer: '' });
    }

    var gplayer = document.getElementById('gsound');

    function correct() {
        setwrong("heart"); setright("hearta");
        setTimeout(() => {
            setright("heartb")

        }, 500);

    }

    function incorrect() {
        setright("heart"); setwrong("hearta");

    }


    var corans;
    const checkAnswer = () => {
        let ansGiven = form.getFieldValue('answer');
        let correctAnsIndex = stepDetails?.stepQuestions[currentQue].answer

        let correctAns = stepDetails?.stepQuestions[currentQue].options[correctAnsIndex]
        corans = correctAns;
        if (ansGiven === correctAns) {
            correct();
            setShowPrint(true);
            setIscorrect(true);
            setclick(5);
            setTimeout(() => {
                changeQuetion(); // Assuming changeQuetion is the function to change the question
            }, 1000)

        } else {
            incorrect();
            setAnswerClicked(0);
            setIscorrect(false);

        }
    }

    var shownarray = [];
    var colorarray = [];
    const noOfSteps = stepDetails.stepQuestions.length;
    for (let i = 0; i < noOfSteps; i++) {

        shownarray[i] = stepDetails.stepQuestions[i].tobeshown;
        colorarray[i] = stepDetails.stepQuestions[i].showfcheading;
    }

    var changeQuetion = () => {

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

            setcurrentQue(currentQue + 1);
            console.log(currentQue);

        }



        setAnswerClicked(0);
        setIscorrect(false);
        setright("heart");
        setwrong("heart");

    }

    var fchead = stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].showfcheading;

    // this set show is now present in check answer
    const handleStart = () => {
        setStart(true);


    }
    var fcheading = stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].threejsstep;
    var fclen = stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].showfc.length;
    function trialsh() {
        for (let inde = 0; inde < fclen; inde++) {
            <div className='print' style={{ fontWeight: "bold" }}
            >stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].showfc[inde]</div>
        }
    }

    const handleChange = (a, b) => {
        debugger
        //setSteps(a);
        setcurrentQue(0);
        //setStepSelected(a + 1);
    }


    return (
        <Container className='impcont' >

            <Row gutter={[24, 24]} className='mainContainer'>
                <Col span={6} className="queSteps">


                    <Steps questionDetails={questionDetails} stepDetails={stepDetails} steps={step} changeStep={changeStep} />
                    <Col span={24} className="eqa">
                        <div className='print' style={{
                            fontWeight: "bold", textAlign: "center", backgroundColor: bgfchead
                        }}
                        >{fchead}</div>
                        {stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].showfc.map((data, idx) => (

                            <div className='print' style={{ fontWeight: "bold" }}
                            >{data}</div>
                        ))}
                    </Col>
                </Col>


                <Col span={16} className="quesblk">
                    <Form form={form} onFinish={checkAnswer}  >
                        <Row gutter={[16, 16]} className="answers">
                            <Col span={24} >
                                {/* <Back className = {backstl} /> */}
                                {/* <Link to="/login"    ><Button  type="primary" > Back </Button></Link> */}
                                <div className="question">

                                    <div>Question {quesNo}</div>
                                    <div>
                                        {questionData[quesNo].questions[0].questionDesc}
                                    </div>
                                </div>
                                <Button type="primary" onClick={handleStart}> Start </Button>

                            </Col>
                            {start &&


                                <>

                                    <Col>
                                        <Card className="flex-row" >
                                            <CardBody>
                                                <CardTitle>Simulation</CardTitle>
                                                <div className="three">
                                                    <TestThree
                                                        threejsstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep}
                                                        threejssubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubstep}
                                                        threejssubsubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubsubstep}
                                                        answerClicked={answerClicked}
                                                        iscorrect={iscorrect}
                                                        qno={quesNo}
                                                        atob={advtobas}
                                                        stepans={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].options[stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].answer]}
                                                        click={click}
                                                        type={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].type}
                                                    />
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col span={10} className="question">

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
                                                            <Radio.Group onChange={checkAnswer} >
                                                                {stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].options.map((data, idx) => (
                                                                    <Radio value={data} name={data} className="myRadio"
                                                                    >{data}</Radio>
                                                                ))}
                                                            </Radio.Group>
                                                        </Form.Item>
                                                        {showError &&
                                                            <Alert
                                                                message="oops! Try Again" type="error" showIcon
                                                            />}


                                                        <Button type="primary" htmlType="submit">Answer Status</Button>

                                                        <span className="tr1"><FcApproval className={right} /></span>
                                                        <span className="tr2"><FcDisapprove className={wrong} /> </span>

                                                    </CardText>
                                                </CardBody>

                                            </Card>

                                        </Col>
                                        <Col span={24} className="eqa">
                                            <h4>Observations</h4>

                                            {!showPrint && stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show1.map((data, idx) => (

                                                <div className='print' style={{ fontWeight: "bold" }}
                                                >{data}</div>
                                            ))}
                                            {showPrint && stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show2.map((data, idx) => (

                                                <div className='print' style={{ fontWeight: "bold" }}
                                                >{data}</div>
                                            ))}
                                        </Col>
                                        {console.log("heyyyyyy")}
                                        {console.log(questionDetails.steps.stepName)}
                                    </Col>

                                </>

                            }

                        </Row>
                    </Form>
                    <Col span={24} >
                        <ChatGptInput handleChange={handleChange} questionDetails={questionDetails} stepDetails={stepDetails} steps={step} changeStep={changeStep} ></ChatGptInput>
                    </Col>
                </Col>
            </Row >



        </Container >
    )
}

export default Questions
