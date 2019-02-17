import React, {Component} from 'react';
import { Chart } from "react-charts";
import DonutChart from 'react-donut-chart'

import './style.css'


const data = [
  {
    label: "Series 1",
    data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
  },
  {
    label: "Series 2",
    data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
  },
  {
    label: 'Piwo 3',
    data:[[0, 6], [1, 3], [3, 2], [3, 6], [4, 5]]
  }
];

const axes = [
  { primary: true, type: "linear", position: "bottom" },
  { type: "linear", position: "left" }
];

const donut = [
  { label: 'Give you up', value: 25},
  { label: '', value: 75, isEmpty: true}
];

class Rank extends Component{

  render(){

    return (
    
    <div className='container-ranking'>
        <Chart
          data={data}
          axes={axes}
        />
         <DonutChart
          donut={[{
          label: 'Give you up',
          value: 25
      },
      {
          label: '',
          value: 75,
          isEmpty: true
      }]} />
    </div>
    )
  }
}

export default Rank;


