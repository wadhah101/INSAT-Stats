import React from "react";
import { Bar } from "react-chartjs-2";
import { GlSheet } from "src/@types/GlSheet";
import v from "voca";

const makeData = (input: GlSheet[]) => ({
    labels: input.map(
        (e, index) =>
            `${v.titleCase(e.PRENOM)} ${v.titleCase(e.NOM)} #${index + 1}`,
    ),
    datasets: [
        {
            label: "GL3",
            data: input.map((e) => e.MOY_ANN),
            backgroundColor: input.map((_, index) =>
                index % 2
                    ? "rgba(247, 39, 84, 0.2)"
                    : "rgba(54, 162, 235, 0.2)",
            ),
            borderColor: input.map((_, index) =>
                index % 2 ? "rgba(247, 39, 84, 1)" : "rgba(54, 162, 235, 1)",
            ),
            borderWidth: 1,
        },
    ],
});

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
            position: "right",
        },
        title: {
            display: true,
            text: "GL3 Moy annuel",
        },
    },
};
interface IMoyChart {
    input: GlSheet[];
}

const RankingChart: React.FC<IMoyChart> = ({ input }) => (
    <>
        <Bar type="bar" height={720} data={makeData(input)} options={options} />
    </>
);

export default RankingChart;
