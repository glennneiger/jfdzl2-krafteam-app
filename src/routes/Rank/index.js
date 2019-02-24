import React, { Component } from 'react';
// import { Chart } from "react-charts";
import { Doughnut } from 'react-chartjs-2';


import './style.css'


const data = {
  labels: [
    'Piwo',
    'browar',
    'piana',
    'nektar'
  ],
  datasets: [{
    data: [600, 200, 300,500],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#EACe54'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    borderColor: [
      '#eee',
      '#eee',
      '#eee'
    ]
  }]
};
class Dashboard extends React.Component {

  render() {
    return (
      <div>

        <Doughnut
          data={data}
          width={500}
          height={500}
          options={{
            title: {
              display: true,
              text: 'Ranking piw',
              fontSize: 20
            },
            legend: false,
            maintainAspectRatio: false,
            tooltips: {
              
              enabled: false,

              custom: function (tooltipModel) {
              
                var tooltipEl = document.getElementById('chartjs-tooltip');

            
                if (!tooltipEl) {
                  tooltipEl = document.createElement('div');
                  tooltipEl.id = 'chartjs-tooltip';
                  tooltipEl.innerHTML = "<table></table>";
                  document.body.appendChild(tooltipEl);
                }

           
                if (tooltipModel.opacity === 0) {
                  tooltipEl.style.opacity = 0;
                  return;
                }

                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                  tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                  tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                  return bodyItem.lines;
                }

        
                if (tooltipModel.body) {
                  var titleLines = tooltipModel.title || [];
                  var bodyLines = tooltipModel.body.map(getBody);

                  var innerHtml = '<thead>';

                  titleLines.forEach(function (title) {
                    innerHtml += '<tr><th>' + title + '</th></tr>';
                  });
                  innerHtml += '</thead><tbody>';

                  bodyLines.forEach(function (body, i) {
                    var colors = tooltipModel.labelColors[i];
                    var style = 'background:' + colors.backgroundColor;
                    style += '; border-color:' + colors.borderColor;
                    style += '; border-width: 2px';
                    var span = '<span style="' + style + '"></span>';
                    innerHtml += '<tr><td>' + span + body + '</td></tr>';
                  });
                  innerHtml += '</tbody>';

                  var tableRoot = tooltipEl.querySelector('table');
                  tableRoot.innerHTML = innerHtml;
                }

         
                var position = this._chart.canvas.getBoundingClientRect();

          
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
              }
            }
          }}
        />

      </div>
    )
  }
}





// const data = [
//   {
//     label: "Series 1",
//     data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
//   },
//   {
//     label: "Series 2",
//     data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
//   },
//   {
//     label: 'Piwo 3',
//     data:[[0, 6], [1, 3], [3, 2], [3, 6], [4, 5]]
//   }
// ];

// const axes = [
//   { primary: true, type: "linear", position: "bottom" },
//   { type: "linear", position: "left" }
// ];

// const donut = [
//   { label: 'Give you up', value: 25},
//   { label: '', value: 75, isEmpty: true}
// ];

// class Rank extends Component{

//   render(){

//     return (
    
//     <div className='container-ranking'>
//         <Chart
//           data={data}
//           axes={axes}
//         />
        
//     </div>
//     )
//   }
// // }

// export default Rank;

export default Dashboard
