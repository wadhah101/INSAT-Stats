import CompareChart from "@components/charts/CompareChart/controller";
import { Container } from "@components/container";
import { NextPage } from "next";
import React from "react";
import { GenericFiliereResult } from "src/@types/GenericDataObject";
import {
    getStaticPathsFiliere,
    getStaticPropsFiliere,
} from "src/utils/filiere.utils";

const GL3Page2021: NextPage<GenericFiliereResult> = ({ studentsResults }) => {
    return (
        <Container>
            <div className="self-center md:w-8/12 ">
                <div className="mt-8 ">
                    <CompareChart data={studentsResults} />
                </div>
            </div>
        </Container>
    );
};

export const getStaticProps = getStaticPropsFiliere;

export const getStaticPaths = getStaticPathsFiliere;

export default GL3Page2021;
