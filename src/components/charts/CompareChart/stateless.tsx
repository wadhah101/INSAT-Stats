import React from "react";
import { Bar } from "react-chartjs-2";
import { GenericStudentResult } from "src/@types/GenericDataObject";
import { makeChartData } from "src/utils/chartData.utils";

interface ICompareChartProps {
    data: GenericStudentResult[];
}

const StatelessCompareChart: React.FC<ICompareChartProps> = ({ data }) => {
    const options = {
        plugins: {
            legend: {
                display: data.length > 1,
            },
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const fields = Object.keys(data[0].data);

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {fields.map((e, ind) => (
                <div className="p-2 border" key={ind}>
                    <h2 className="text-xl font-medium text-black md:text-2xl text-opacity-60">
                        {e}
                    </h2>
                    <Bar
                        type="bar"
                        data={makeChartData(data, e)}
                        options={options}
                    />
                </div>
            ))}
        </div>
    );
};

export default StatelessCompareChart;
