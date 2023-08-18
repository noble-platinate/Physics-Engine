import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import './question.css'

const gridStyle = {
    width: '95%',
    textAlign: 'center',
    display: 'block',
    margin: '2%',
    background: 'cornflowerblue',
    color: 'whitesmoke'
};
const Steps = (props) => {


    const changeStep = (data) => {
        props.changeStep(data);
        // onClick={() => { this.onBizGiveThemeRemoved(item, pos); }}

    }

    return (
        <div className="demo">
            <Card title="Steps">
                {props.steps.map(data => (
                    <Card.Grid className={data.stepStatus == 'active' ? 'activeGridStyle' : "gridStyle"}
                        onClick={() => { changeStep(data); }}
                        value={data.stepNumber} name={() => props.stepSelected(data)}
                    >
                        {data.stepName}</Card.Grid>))}

            </Card>
        </div>
    )
}

export default Steps