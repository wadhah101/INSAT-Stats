import { env } from "process";
import type { NextApiRequest, NextApiResponse } from "next";
import fsp from "fs/promises";
import { Filiere } from "src/@types/GenericDataObject";

const canRun = env.NODE_ENV === "development";

export default async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    if (!canRun) res.status(400).json({ name: "server error" });

    const current: Filiere[] = [
        { name: "GL3", year: 2021 },
        { name: "MPI", year: 2021 },
    ];
    await fsp.writeFile(
        "data/json/filiere.json",
        JSON.stringify(current, null, 2),
    );
    res.status(200).json(current);
};
