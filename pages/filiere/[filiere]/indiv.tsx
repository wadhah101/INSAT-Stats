import IndivChart from "@components/charts/IndivChart/controller";
import { Container } from "@components/container";
import { NextPage } from "next";
import React from "react";
import { GenericFiliereResult } from "src/@types/GenericDataObject";
import {
    getStaticPathsFiliere,
    getStaticPropsFiliere,
} from "src/utils/filiere.utils";

const GL3Page2021: NextPage<GenericFiliereResult> = ({
    filiere,
    studentsResults,
}) => {
    return (
        <Container>
            <div className="px-2 mx-auto mt-2 mt-8 md:px-0 md:w-8/12 ">
                <div>
                    <h1 className="text-4xl font-semibold text-center text-black text-opacity-50">
                        {`${filiere.name}-${filiere.year}`.toUpperCase()}{" "}
                    </h1>
                </div>
                <div className="flex flex-col mt-8">
                    <IndivChart data={studentsResults} />
                </div>
            </div>
        </Container>
    );
};

export const getStaticProps = getStaticPropsFiliere;

export const getStaticPaths = getStaticPathsFiliere;

export default GL3Page2021;
