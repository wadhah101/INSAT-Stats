import React from "react";
import { Bar } from "react-chartjs-2";
import { GenericStudentResult } from "src/@types/GenericDataObject";

const makeData = (input: GenericStudentResult[], compAttribute: string) => {
    const sorted = [...input].sort(
        (a, b) =>
            b.data[compAttribute][compAttribute] -
            a.data[compAttribute][compAttribute],
    );

    return {
        labels: sorted.map((e, index) => `${e.fullName} #${index + 1}`),
        datasets: [
            {
                data: sorted.map((e) => e.data[compAttribute][compAttribute]),
                backgroundColor: input.map((_, index) =>
                    index % 2
                        ? "rgba(247, 39, 84, 0.2)"
                        : "rgba(54, 162, 235, 0.2)",
                ),
                borderColor: input.map((_, index) =>
                    index % 2
                        ? "rgba(247, 39, 84, 1)"
                        : "rgba(54, 162, 235, 1)",
                ),
                borderWidth: 1,
            },
        ],
    };
};

const options = {
    indexAxis: "y",

    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Moy annuel",
        },
    },
};
interface IMoyChart {
    data: GenericStudentResult[];
    compAttribute: string;
}

const RankingChart: React.FC<IMoyChart> = ({ compAttribute, data }) => {
    return (
        <Bar
            type="bar"
            height={720}
            data={makeData(data, compAttribute)}
            options={options}
        />
    );
};

export default RankingChart;
