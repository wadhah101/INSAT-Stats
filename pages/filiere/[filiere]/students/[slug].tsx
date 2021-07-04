import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import fsp from "fs/promises";
import { Filiere, GenericFiliereResult } from "src/@types/GenericDataObject";

const page: NextPage = () => {
    return <div>Enter</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const data: Filiere[] = JSON.parse(
        await fsp.readFile("data/json/filiere.json", "utf-8"),
    );

    const studentsReq = data.map(async (e) => {
        const filiereQuery = `${e.name}-${e.year}`;

        const buffer = await fsp.readFile(`data/json/${filiereQuery}.json`, {
            encoding: "utf-8",
        });
        const { studentsResults }: GenericFiliereResult = JSON.parse(buffer);

        return studentsResults.map((x) => ({
            params: { filiere: filiereQuery, slug: x.slug },
        }));
    });

    const students = await Promise.all(studentsReq);
    return {
        paths: students.flat(),
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            data: null,
        },
    };
};

export default page;
