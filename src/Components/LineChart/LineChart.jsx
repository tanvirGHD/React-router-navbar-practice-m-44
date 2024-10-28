import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Student 1", math: 89, physics: 80, chemistry: 68 },
        { id: 2, name: "Student 2", math: 78, physics: 76, chemistry: 82 },
        { id: 3, name: "Student 3", math: 98, physics: 69, chemistry: 91 },
        { id: 4, name: "Student 4", math: 70, physics: 70, chemistry: 72 },
        { id: 5, name: "Student 5", math: 58, physics: 55, chemistry: 84 },
        { id: 6, name: "Student 6", math: 71, physics: 70, chemistry: 79 },
        { id: 7, name: "Student 7", math: 65, physics: 80, chemistry: 93 },
        { id: 8, name: "Student 8", math: 76, physics: 74, chemistry: 75 },
        { id: 9, name: "Student 9", math: 59, physics: 87, chemistry: 86 },
        { id: 10, name: "Student 10", math: 84, physics: 82, chemistry: 80 }
    ];


    return (
        <div className=''>
            <LChart width={500} height={400} data={studentMarks}>
                <Line dataKey="math"></Line>
                <Line dataKey="physics"></Line>
                <Line dataKey="chemistry"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;