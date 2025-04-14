import React from 'react';
import { Line, LineChart } from 'recharts';



const studentData = [
    {
      "name": "Alice",
      "physics": 85,
      "math": 90,
      "chemistry": 88
    },
    {
      "name": "Bob",
      "physics": 78,
      "math": 82,
      "chemistry": 80
    },
    {
      "name": "Charlie",
      "physics": 92,
      "math": 95,
      "chemistry": 94
    },
    {
      "name": "Diana",
      "physics": 70,
      "math": 75,
      "chemistry": 72
    },
    {
      "name": "Ethan",
      "physics": 88,
      "math": 85,
      "chemistry": 90
    }
  ]
  
const ResultChart = () => {
    return (
        <div>
            <LineChart height={500} width={500} data={studentData}>
                <Line dataKey='math'></Line>
            </LineChart>
            <LineChart height={600} width={500} data={studentData}>
                <Line dataKey='chemistry' stroke="#8884d8"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;