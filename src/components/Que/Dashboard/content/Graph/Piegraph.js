/* piegraph.js */
import React from 'react';

import CanvasJSReact from './canvasjs.react';
var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Piegraph extends Component {	
    render(props) {
      const options = {
        animationEnabled: true,
        outerWidth:30,
        innerWidth:15,
        theme: "dark1",
        
        
        data: [{
            type: "doughnut",
            startAngle: 60,
            radius: 100,
            theme:"Dark2",
            // innerRadius: 10,
            // outerRadius: 0,
            indexLabelFontSize: 10,
            indexLabel: "{y}",
            // toolTipContent: "{y} correct",
            dataPoints: [
                
                { y: this.props.score, toolTipContent: "{y} Correct", },
                
                { y: this.props.totalques -this.props.score, toolTipContent: "{y} Incorrect",}
            ]
        }]
    }
     
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }