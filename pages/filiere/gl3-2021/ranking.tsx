import React from "react";

import { Container } from "@components";
import { GetStaticProps, NextPage } from "next";
import * as fsp from "fs/promises";
import { GL3CompareObject, GL3DataObject } from "src/@types/GL3DataObject";
import RankingChart from "@components/charts/RankingChart";

interface IGL3Props {
    compareData: GL3CompareObject[];
    groupedFields: string[][];
    renamedFields: Record<string, string>;
    data: [];
}

// COOOODE NOW REFACTOR LATER
// TODO FIX THIS BAD CODE PROTOTYPE

const GL3Page2021: NextPage<IGL3Props> = ({ compareData }) => {
    return (
        <Container>
            <div className="px-2 mx-auto my-8 md:px-0 md:my-20 md:w-8/12 ">
                <div className="flex flex-col mt-8">
                    <RankingChart compAttribute="MOY_ANN" data={compareData} />
                </div>
            </div>
        </Container>
    );
};

export const getStaticProps: GetStaticProps<IGL3Props> = async () => {
    const buffer = await fsp.readFile("public/json/gl3-2021.json", {
        encoding: "utf-8",
    });

    const { compareData, groupedFields, renamedFields }: GL3DataObject =
        JSON.parse(buffer);

    return {
        props: {
            renamedFields,
            compareData,
            groupedFields,
            data: null,
        },
    };
};

export default GL3Page2021;