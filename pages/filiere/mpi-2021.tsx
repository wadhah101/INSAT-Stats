import React, { useState } from "react";

import { Container } from "@components";
import { GetStaticProps, NextPage } from "next";
import * as fsp from "fs/promises";
import Tabs from "@components/tabs/stateless";
import CompareChart from "@components/charts/CompareChart/controller";
import Contact from "@components/contact";
import IndivChart from "@components/charts/IndivChart/controller";
import { MPICompareObject, MPIDataObject } from "src/@types/MPIDataObject";
import RankingChart from "@components/charts/RankingChart";

interface IMPIProps {
    compareData: MPICompareObject[];
    groupedFields: string[][];
    renamedFields: Record<string, string>;
}

// COOOODE NOW REFACTOR LATER
// TODO FIX THIS BAD CODE PROTOTYPE
const tabs = ["Individual", "Compare", "Ranking"];

const GL3Page2021: NextPage<IMPIProps> = ({
    groupedFields,
    renamedFields,
    compareData,
}) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <Container>
            <div className="px-2 mx-auto my-8 md:px-0 md:my-20 md:w-8/12 ">
                <Contact />
                <Tabs
                    onSelect={(e) => setSelectedTab(e)}
                    current={selectedTab}
                    data={tabs}
                />

                {/* CODE NOW REFACTOR LATER */}
                {/* GOD FORGIVE MY BAD CODE */}
                {/* TODO use more generic system for tab organization */}

                <div className="flex flex-col mt-8">
                    {selectedTab === 0 && (
                        <IndivChart
                            renamedFields={renamedFields}
                            groupedFields={groupedFields}
                            data={compareData}
                        />
                    )}

                    {selectedTab === 1 && (
                        <CompareChart
                            renamedFields={renamedFields}
                            groupedFields={groupedFields}
                            data={compareData}
                        />
                    )}
                    {selectedTab === 2 && (
                        <RankingChart
                            compAttribute="M.G(avant contrôle)"
                            data={compareData}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export const getStaticProps: GetStaticProps<IMPIProps> = async () => {
    const buffer = await fsp.readFile("public/json/mpi-2021.json", {
        encoding: "utf-8",
    });

    const { compareData, groupedFields, renamedFields }: MPIDataObject =
        JSON.parse(buffer);

    return {
        props: {
            renamedFields,
            compareData,
            groupedFields,
        },
    };
};

export default GL3Page2021;
