import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const studentData =  [
    {
      "name": "Alice",
      "uv": 1200,
      "pv": 2400,
      "mpv": 1800
    },
    {
      "name": "Bob",
      "uv": 1100,
      "pv": 2100,
      "mpv": 1600
    },
    {
      "name": "Charlie",
      "uv": 1500,
      "pv": 2700,
      "mpv": 2000
    },
    {
      "name": "Diana",
      "uv": 1300,
      "pv": 2500,
      "mpv": 1900
    },
    {
      "name": "Ethan",
      "uv": 1000,
      "pv": 2000,
      "mpv": 1500
    }
  ]
  
const Toltip = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h3>Stacked Area Chart</h3>
                <AreaChart
                height={300}
                width={600}
                data={studentData}
                margin={{top:20, right:30, left:20, bottom:5}}
                >
                    <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
                    <XAxis dataKey={"name"}></XAxis>
                    <YAxis ></YAxis>
                    
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Area type={"monotone"} dataKey={"uv"} stackId={"1"} stroke='#8884d8' fill='#8884d8'></Area>
                    <Area type={"monotone"} dataKey={"pv"} stackId={"1"} stroke='#8884d8' fill='#8884d8'></Area>
                    <Area type={"monotone"} dataKey={"mpv"} stackId={"1"} stroke='#8884d8' fill='#8884d8'></Area>
                </AreaChart>
            </div>
            
        </div>
    );
};

export default Toltip;

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        height: '100vh',
        texAlign: "center"
    },
    content:{
        textAlign: 'center'
    }

}