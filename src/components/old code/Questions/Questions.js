import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { questionData } from './Questiondata.js';
import ReactPlayer from "react-player";
import './Question.css';


import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardLink,
    CardText,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Row,
    ButtonGroup, ButtonToolbar,
    FormGroup,
    Input,
    Label,
    Form
} from 'reactstrap';
import { event } from 'jquery';
import { GiArtilleryShell } from 'react-icons/gi';

const stepsBackground = {
    backgroundColor: '',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};
const Questions = (props) => {
    const [stepSelected, setStepSelected] = useState("1");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const chapterNumber = 1;
    const questionNumber = 1;
    const chapterDetails = questionData.filter(chapter => chapter.chapterNumber == chapterNumber)[0];
    const questionDetails = chapterDetails.questions.filter(question => question.questionNumber == questionNumber)[0];
    const stepDetails = questionDetails.steps.filter(step => step.stepNumber == stepSelected)[0];

    const changeStep = (e) => {
        e.preventDefault();
        setStepSelected(e.target.value);
        setSelectedAnswer("");
        e.preventDefault();
    }


    function checkAnswer() {
        if (stepDetails.stepAnswer === selectedAnswer)
            alert("happy");
        else
            alert("Sad");
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
    return (
        <Container className="question">
            <Row md={6} sm={6} xs={12} >
                <Col md={12} sm={12} xs={12} className="mb-1">
                    <Card className="flex-row">
                        <CardBody>
                            <CardTitle>Question 1</CardTitle>
                            <CardText>
                                A 200.0-gram mass (m1) and 50.0-gram mass (m2) are connected by a string. The string is stretched over a pulley. Determine the acceleration of the masses and the tension in the string.
                </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row md={6} sm={6} xs={12} >
                <Col md={3} sm={6} xs={12} className="mb-0">
                    <Card className="flex-row">
                        <CardBody>
                            <CardTitle>Steps</CardTitle>
                            <CardText>
                                <ButtonToolbar>
                                    <ButtonGroup className="mr-2" vertical>
                                        {questionDetails.steps.map(data => (<Button onClick={changeStep} type="reset" value={data.stepNumber} name={stepSelected}>{data.stepName}</Button>))}
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={9} sm={6} xs={12} className="mb-0">
                    <Row md={6} sm={6} xs={12} className="mb-0">{stepDetails.stepInfo}</Row>
                    <Row>
                        <Col md={6} sm={6} xs={12} className="mb-0">
                            <Row>
                                <Card className="flex-row" style={{ width: "100%", height: "100%" }}>
                                    <CardBody>
                                        <CardTitle>Video </CardTitle>
                                        <CardText>
                                            <ReactPlayer
                                                url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
                                                width={350}
                                                height={272}
                                            />
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Row>
                        </Col>
                        <Col md={6} sm={6} xs={12} style={stepsBackground} >
                            <Row className="mb-1">
                                <Card className="flex-row" style={{ width: "100%", height: "100%" }}>
                                    <CardBody>
                                        <CardTitle>{stepDetails?.stepQuestion}</CardTitle>
                                        <CardText>
                                            <Form>
                                                <FormGroup tag="fieldset">
                                                    {/* <legend>StepWise Question Here</legend> */}
                                                    {stepDetails?.options.map((data, idx) => (<FormGroup check >
                                                        <Input type={stepDetails.stepType} name={stepDetails.stepNumber + selectedAnswer} value={idx}
                                                            onChange={answerChange}
                                                        />
                                                        <Label check for={stepDetails.stepNumber}>
                                                            {data}
                                                        </Label>
                                                    </FormGroup>
                                                    )
                                                    )
                                                    }
                                                </FormGroup>

                                                <Button className="float-right" onClick={checkAnswer} type="reset">Check Answer</Button>
                                            </Form>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Row>
                            <Row className="mb-1">

                            </Row>
                        </Col>
                    </Row>
                </Col>


            </Row>
        </Container>
    )
}

export default Questions
