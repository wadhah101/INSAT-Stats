import { Filiere } from "src/@types/GenericDataObject";
import { GetStaticPaths } from "next";
import fsp from "fs/promises";
export const getStaticPathsFiliere: GetStaticPaths = async (ctx) => {
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
