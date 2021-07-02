import React from "react";
import { Bar } from "react-chartjs-2";
import { GenericCompareObject } from "src/@types/GenericDataObject";
import { getRenamedField, makeChartData } from "src/utils/GenericCompareUtils";
import v from "voca";

interface ICompareChartProps<T> {
    data: GenericCompareObject<T>[];
    renamedFields: Record<string, string>;
    groupedFields: string[][];
    fieldMapper: (e: string, index: number, arr: string[]) => string;
}

const StatelessCompareChart = <T extends unknown>({
    data,
    renamedFields,
    fieldMapper,
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
                                groupedNote[0].slice(
                                    groupedNote.length > 1 ? -3 : 0,
                                ),
                                renamedFields,
                            ),
                        )}
                    </h2>
                    <Bar
                        type="bar"
                        data={makeChartData(data, groupedNote, fieldMapper)}
                        options={options}
                    />
                </div>
            ))}
        </div>
    );
};

export default StatelessCompareChart;
