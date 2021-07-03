import React from "react";
import { GenericStudentResult } from "src/@types/GenericDataObject";

interface ICompareChartProps {
    data: GenericStudentResult[];
}

const StatelessCompareChart = ({ data }: ICompareChartProps): JSX.Element => {
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

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {/* {groupedFields.map((groupedNote, ind) => (
                <div
                    className="p-2 border border-black md:p-4 border-opacity-10"
                    key={ind}
                >
                    <h2 className="text-xl font-medium text-black md:text-2xl text-opacity-60">
                        {v.titleCase(
                            getRenamedField(
                                groupedNote[0].slice(
                                    groupedNote.length > 1 ? -3 : 0,
                                ),
                                renamedFields,
                            ),
                        )}
                    </h2>
                    <Bar
                        type="bar"
                        data={makeChartData(data)}
                        options={options}
                    />
                </div>
            ))} */}
        </div>
    );
};

export default StatelessCompareChart;
