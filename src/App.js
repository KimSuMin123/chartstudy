import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const app = () => {

  let data =  {
      labels: ['4월 2일', '4월 5일', '4월 14일', '5월 3일', '5월 8일'],
      datasets: [
        {
          label: '공포',
          data: [2, 12, 12, 12, 2],
          borderWidth: 1
        },
        {
          label: '분노',
          data: [12, 19, 3, 5, 9],
          borderWidth: 1
        },{
          label: '슬픔',
          data: [8, 14, 31, 23, 12],
          borderWidth: 1
        },{
          label: '혐오',
          data: [6, 23, 15, 28, 32],
          borderWidth: 1
        },{
          label: '행복',
          data: [2, 12, 12, 12, 2],
          borderWidth: 1
        },
        {
          label: '놀람',
          data: [12, 19, 3, 5, 9],
          borderWidth: 1
        },{
          label: '중립',
          data: [8, 14, 31, 23, 12],
          borderWidth: 1
        },
      ],
    };
    
	return (
    	<div>
        	<Bar type="Bar" data={data} />
        </div>
    );
    
}

export default app;