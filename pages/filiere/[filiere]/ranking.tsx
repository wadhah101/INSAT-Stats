import { NextPage } from "next";
import {
    getStaticPathsFiliere,
    getStaticPropsFiliere,
} from "src/utils/filiere.utils";

// COOOODE NOW REFACTOR LATER
// TODO FIX THIS BAD CODE PROTOTYPE

const GL3Page2021: NextPage = () => {
    return null;
    // return (
    //     <Container>
    //         <div className="px-2 mx-auto my-8 md:px-0 md:my-20 md:w-8/12 ">
    //             <div className="flex flex-col mt-8">
    //                 <RankingChart compAttribute="MOY_ANN" data={compareData} />
    //             </div>
    //         </div>
    //     </Container>
    // );
};

export const getStaticProps = getStaticPropsFiliere;

export const getStaticPaths = getStaticPathsFiliere;

export default GL3Page2021;
