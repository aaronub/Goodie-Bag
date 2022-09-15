import { Bar } from 'react-chartjs-2';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const BarChart = ()=>{
    return(
        <div className='chart'>
            <Bar
                data={{
                    labels: ['Broccoli', 'Tomato', 'Cabbage'],
                    //Looks like datasets is necessary!!!!
                    datasets: [{
                        label: 'Inventory 2022',
                        data: [5, 10, 8],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1
                    },{
                        label: 'Inventory 2021',
                        data: [15, 13, 5],
                        backgroundColor: 'pink',
                        borderColor:'red',
                        borderWidth: 1
                    }]
                }}
                // options={{
                //     animations: {
                //         backgroundColor: {
                //           type:'color',
                //           duration: 2000,
                //           easing: 'linear',
                //           from: 'red',
                //           to: 'blue',
                //           loop: true
                //         }
                //       },
                //       plugins:{
                //         legend:{
                //             display: true,
                //             labels: {
                //                 color: 'green',                               
                //             }
                //         }
                //       }
                // }}

                // height={'400'}
                // width={'600'}
            />
        </div>
    )
}


export default BarChart