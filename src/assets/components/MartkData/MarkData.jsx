import React, { use } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarkData = ({markDataAxios}) => {
    const markDataRes = use(markDataAxios);
    const markData = markDataRes.data;

    const martChertData = markData.map(studentData=>{
        const student={
            id: studentData.id,
            name: studentData.name,
            biology: studentData.others.biology,
            english: studentData.others.english,
            ict: studentData.others.ict
        }
        return student;
    })
     
    return (
        <div>
            <div>
            <AreaChart
            height={300}
            width={600}
            data={martChertData}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}
            >
            <CartesianGrid strokeDasharray={"3,3"}></CartesianGrid>
            <XAxis data="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Area type={"monotone"} dataKey={"biology"} stackId={"1"} stroke='#5032a8' fill='#5032a8'></Area>
            <Area type={"monotone"} dataKey={"ict"} stackId={"1"} stroke='#8884d8' fill='#8884d8'></Area>
            <Area type={"monotone"} dataKey={"english"} stackId={"1"} stroke='#66a832' fill='#66a832'></Area>
            </AreaChart>
            </div>
        </div>
    );
};

export default MarkData;