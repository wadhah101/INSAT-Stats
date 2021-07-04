import RankingChart from "@components/charts/RankingChart";
import { Container } from "@components/container";
import { NextPage } from "next";
import React from "react";
import { GenericFiliereResult } from "src/@types/GenericDataObject";
import {
    getStaticPathsFiliere,
    getStaticPropsFiliere,
} from "src/utils/filiere.utils";

const rankingPage: NextPage<GenericFiliereResult> = ({ studentsResults }) => {
    return null;
    // return (
    //     <Container>
    //         <div className="px-2 mx-auto my-8 md:px-0 md:my-20 md:w-8/12 ">
    //             <div className="flex flex-col mt-8">
    //                 <RankingChart
    //                     compAttribute="MOY_ANN"
    //                     data={studentsResults}
    //                 />
    //             </div>
    //         </div>
    //     </Container>
    // );
};

export const getStaticProps = getStaticPropsFiliere;

export const getStaticPaths = getStaticPathsFiliere;

export default rankingPage;
