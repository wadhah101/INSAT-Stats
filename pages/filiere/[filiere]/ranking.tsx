import { GetStaticProps, NextPage } from "next";
import * as fsp from "fs/promises";
import { getStaticPathsFiliere } from "src/utils/filiere.utils";

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

export const getStaticProps: GetStaticProps = async () => {
    const buffer = await fsp.readFile("data/json/GL3-2021.json", {
        encoding: "utf-8",
    });

    const { compareData, groupedFields, renamedFields } = JSON.parse(buffer);

    return {
        props: {
            renamedFields,
            compareData,
            groupedFields,
            data: null,
        },
    };
};

export const getStaticPaths = getStaticPathsFiliere;

export default GL3Page2021;
