import { GetStaticProps, NextPage } from "next";
import * as fsp from "fs/promises";

const GL3Page2021: NextPage = () => {
    return null;
    // return (
    //     <Container>
    //         <div className="px-2 mx-auto my-8 md:px-0 md:my-20 md:w-8/12 ">
    //             <div className="flex flex-col mt-8">
    //                 <IndivChart
    //                     fieldMapper={gl3FieldMapper}
    //                     renamedFields={renamedFields}
    //                     groupedFields={groupedFields}
    //                     data={compareData}
    //                 />
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

export async function getStaticPaths() {
    return {
        paths: [
            { params: { filiere: "1" } }, // See the "paths" section below
            { params: { filiere: "2" } }, // See the "paths" section below
            { params: { filiere: "3" } }, // See the "paths" section below
            { params: { filiere: "4" } }, // See the "paths" section below
            { params: { filiere: "5" } }, // See the "paths" section below
        ],
        fallback: false,
    };
}
export default GL3Page2021;
