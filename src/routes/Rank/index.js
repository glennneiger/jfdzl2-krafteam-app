import React, { Component } from 'react';
// import { Chart } from "react-charts";
import { Doughnut } from 'react-chartjs-2';


import './style.css'


const beer = {
  labels: [
    'Piwo',
    'browar',
    'piana',
    'Kraft'
  ],
  datasets: [{
    data: [100, 200, 300, 500],
    backgroundColor: [
      '#b453f9',
      '#f95353',
      '#f4e46b',
      '#448437'
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

const venue = {
  labels: [
    'lokal1',
    'lokal2',
    'lokal3',
    'lokal4'
  ],
  datasets: [{
    data: [200, 500, 500, 200],
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
      <div className='container-charts'>

        <Doughnut
          data={beer}
          width={500}
          height={500}
          options={{
            title: {
              display: true,
              text: 'Ranking piw',
              fontSize: 20
            },
            legend: false,
           
          }
          }
        />

        <Doughnut
          data={venue}
          width={500}
          height={500}
          options={{
            title: {
              display: true,
              text: 'Ranking lokali',
              fontSize: 20
            },
            legend: false,
            
          }
          }
        />

      </div>
    )
  }
}





export default Dashboard
