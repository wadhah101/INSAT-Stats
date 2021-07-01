import React from "react";
import { Bar } from "react-chartjs-2";
import { GenericCompareObject } from "src/@types/GenericDataObject";
import {
    getRenamedField,
    makeChartData,
} from "src/utils/GlSheet/GenericCompareUtils";
import v from "voca";

interface ICompareChartProps<T> {
    data: GenericCompareObject<T>[];
    renamedFields: Record<string, string>;
    groupedFields: string[][];
}

const StatelessCompareChart = <T extends unknown>({
    data,
    renamedFields,
    groupedFields,
}: ICompareChartProps<T>): JSX.Element => {
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
            {groupedFields.map((groupedNote, ind) => (
                <div
                    className="p-2 border border-black md:p-4 border-opacity-10"
                    key={ind}
                >
                    <h2 className="text-xl font-medium text-black md:text-2xl text-opacity-60">
                        {v.titleCase(
                            getRenamedField(
                                groupedNote.length > 1
                                    ? groupedNote[0].slice(-3)
                                    : groupedNote[0],
                                renamedFields,
                            ),
                        )}
                    </h2>
                    <Bar
                        type="bar"
                        data={makeChartData(data, groupedNote)}
                        options={options}
                    />
                </div>
            ))}
        </div>
    );
};

export default StatelessCompareChart;
