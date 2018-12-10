import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0, // set shape of line
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'green', // color of line chart
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
      borderWidth: 2,
    },
    {
      label: 'My Second dataset',
      fill: false,
      lineTension: 0, // set shape of line
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'brown',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 60, 30, 45, 60, 55, 20],
      borderWidth: 2,
    }
  ],
};

const options =  {
  scales: {
      xAxes: [{
        gridLines: {
          color: '#aaa',
          borderDash: [1, 3],
          display: false, 
        },
        // display: false, // this will hide vertical lines
      }],
      yAxes: [{
        gridLines: {
          color: '#aaa',
          borderDash: [1, 3],
          display: false, 
        },
        position: 'right',
        // display: false, 
      }]
  },
  tooltips: {
    callbacks: {
      title: function(tooltipItem, data) {
        return 'Hoang';
      },
      label: function(tooltipItem, data) {
        return 'Pham';
      },
      afterLabel: function(tooltipItem, data) {
        return '1984';
      }
    },
    backgroundColor: '#FFF',
    titleFontSize: 16,
    titleFontColor: '#0066ff',
    bodyFontColor: '#000',
    bodyFontSize: 14,
    displayColors: false
  }
};

class LineChart extends Component {
  render() {
    return (
      <div>
        <Line data={data} options={options} />
      </div>
    );
  }
}

export default LineChart;
