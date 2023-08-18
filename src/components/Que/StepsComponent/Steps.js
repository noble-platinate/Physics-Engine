import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import './Steps.css'

const Steps = (props) => {
    const changeStep = (data) => {
        props.steps.map(individualStep=>{
            individualStep.stepStatus='';
        })
        data.stepStatus = 'active';
        props.changeStep(data);
    }
    return (
        <div className="demo">
            <Card title="Steps">
                {props.steps.map(data => (
                    <Card.Grid className={data.stepStatus == 'active' ? 'activeGridStyle' : "gridStyle"}
                        onClick={() => { changeStep(data); 
                        }}
                        value={data.stepNumber} name={() => props.stepSelected(data)}
                    >
                        {data.stepName}</Card.Grid>))}
            </Card>
        </div>
    )
}

export default Steps;