import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        // title: {
        //     display: true,
        //     // text: 'Chart.js Bar Chart',
        // },
    },
};

const labels = ['June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Appointments',
            data: labels.map(() =>
                faker.datatype.number({ min: 300, max: 600 })
            ),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Earnings',
            data: labels.map(() =>
                faker.datatype.number({ min: 500, max: 1000 })
            ),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Cart = () => {
    return <Bar options={options} data={data} />;
};

export default Cart;
