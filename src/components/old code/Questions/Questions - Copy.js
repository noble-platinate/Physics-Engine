import React,{useState,useEffect} from 'react'
import { Button, ButtonGroup, Container,Row,Col,ToggleButton,ToggleButtonGroup,Form } from 'react-bootstrap'
import {QuestionData} from './Questiondata.js'
import './Question.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from '../Canvas/Canvas'
import CalculateApp from '../CalculateApp/CalculateApp'
import {Link} from "react-router-dom";


const Questions = (props) => {
    const d = QuestionData.filter((d)=> d?.chapterId == props.location.state?.chapterId);
    const [questionInfo, setQuestionInfo] =  useState([]);
    const [ radioValue, setRadioValue] = useState(0);
    const [radioValueQuestion, setRadioValueQuestion] = useState(0);
    const [steps, setSteps] = useState([]);
    const setStepsInfo = (info,index) => {
        setRadioValue(index);
        setSteps(info);
    }
    useEffect(() => {
        setStepsInfo(questionInfo?.steps!=undefined?questionInfo?.steps[0]:[],0);
        
    }, [questionInfo]);
    React.useEffect(() => setQuestionAllInfo(d!=undefined?d[0]:[],0), [])

   
    const setQuestionAllInfo = (info,index) =>{
        setQuestionInfo(info);
        setRadioValueQuestion(index);
        
    }
    
     return (
        <Container fluid>                         
            <Row >
            <Col sm={2}> 
                <Link to={{
                pathname:'/',
                 }}>
                    <button type="button">Go to Chapter List</button>
                </Link>
            </Col>
            <Col>
            
             <ToggleButtonGroup type="radio" name="question"  defaultValue = {1}>
            {d.map((items, index)=>{
                return( 
                    <ToggleButton
        key={index}
        type="radio"
        variant= { index == radioValueQuestion ? "primary":"secondary"}
        name="radio"
        value={items}
        onChange={(e) => setQuestionAllInfo(items,index)}
      >{items.questionId}</ToggleButton>
                )
            }
            )
            }
            </ToggleButtonGroup> 
            
            
            </Col>
            <Col sm={2}>Rating 4/5</Col>
        </Row>
        <Row>
            <Col sm={2}>
            <ToggleButtonGroup id="sidebar-subquestion" type="radio" name="options"  defaultValue = {1} vertical>

            {questionInfo?.steps?.map((item,index)=>{

                return(<ToggleButton
                key={index}
                type="radio"
                variant= {index == radioValue? "primary":"secondary"}
                name="radio"
                value={item.step}
                onChange={(e) => setStepsInfo(item,index)
            }
      >
        {item.step}
      </ToggleButton>
    )
}
    
)}
</ToggleButtonGroup>
</Col>
            <Col>
            <Row>
            {questionInfo?.question}
            </Row>
            <Row>
                <Col> 
<div>{steps.stepDetails?.subQuestion}</div>
           {steps?.stepDetails?.subOptions.map((info,index) => (
                                <div key={`inline-${info}`} className="mb-3">
                                    <Form.Check custom label={info} type={steps?.type} id={`inline-${index}-1`} name = {`optionSelected-${radioValueQuestion}`}/>                                    
                                </div>
  ))}
   
                </Col>
                <Col>
                <Row><Canvas/></Row>
                </Col>
            </Row>
            </Col>
        </Row>
    
        <Button variant="success">Submit</Button>{' '}



        </Container>
    )
}

export default Questions
