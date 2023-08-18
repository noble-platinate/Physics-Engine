/* Map.js */
import React from 'react';

import CanvasJSReact from './canvasjs.react';
// import { graphdata } from "./graphdata.json";
var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Map extends Component {	
  
    render() {
      var step1c = this.props.c1;
      var step2c = this.props.c2;
      var step3c = this.props.c3;
      var step4c = this.props.c4;
      var step5c = this.props.c5;
      const options = {
        theme: "dark1", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,	
        title: {
          text: "."
        },
        axisY : {
            title: "% questions corrected"
        },
        axisX : {
            title: "number of step"
        },
        data: [
        //   {				
        //           type: "spline",
        //         //   xValueFormatString: "##.00mn",
        //           dataPoints: [
        //               { x: 0  , y:10  },
        //               { x: 10 , y:20  },
        //               { x: 20 , y:30  },
        //               {  x: 30 , y:40  },
        //               {  x: 40 , y:30  },
        //               {  x: 50 , y:20  },
        //               { x: 60 , y:25 },
        //               { x: 70 , y:15 },
        //               { x:80 , y:10 },
        //               {  x: 90  , y:15},
        //               {  x: 100 , y:10  }
        //           ]
        //  },
         {
            type: "column",
            toolTipContent: "{y}% Percentage questions are corrected in this step",
            // xValueFormatString: "##.00mn",
            dataPoints: [
                { x: 1 ,y:step1c },
                { x: 2 ,y:step2c },
                { x: 3 ,y:step3c },
                {x: 4 ,y:step4c },
                {x: 5 ,y:step5c }
                
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