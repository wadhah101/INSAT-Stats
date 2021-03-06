import { Filiere, GenericFiliereResult } from "src/@types/GenericDataObject";
import { GetStaticPaths, GetStaticProps } from "next";
import fsp from "fs/promises";
import { ParsedUrlQuery } from "querystring";

export interface FiliereStaticPath extends ParsedUrlQuery {
    filiere: string;
}

export const getStaticPathsFiliere: GetStaticPaths<FiliereStaticPath> =
    async () => {
        const data: Filiere[] = JSON.parse(
            await fsp.readFile("data/json/filiere.json", "utf-8"),
        );
        return {
            paths: data.map((e) => ({
                params: { filiere: `${e.name}-${e.year}` },
            })),
            fallback: false,
        };
    };

export const getStaticPropsFiliere: GetStaticProps<
    GenericFiliereResult,
    FiliereStaticPath
> = async (ctx) => {
    const filiereQuery = ctx.params.filiere;

    const buffer = await fsp.readFile(`data/json/${filiereQuery}.json`, {
        encoding: "utf-8",
    });

    const { filiere, studentsResults }: GenericFiliereResult =
        JSON.parse(buffer);

    return {
        props: {
            filiere,
            studentsResults,
        },
    };
};
