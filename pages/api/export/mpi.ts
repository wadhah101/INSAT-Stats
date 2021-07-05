import { env } from "process";
import type { NextApiRequest, NextApiResponse } from "next";
import * as fsp from "fs/promises";
import xlsx from "xlsx";
import v from "voca";
import { getGroupedFields, makeStudentData } from "src/utils/chartData.utils";
import { MPISheet } from "src/@types/MPIDataObject";
import R from "ramda";
import { GenericFiliereResult } from "src/@types/GenericDataObject";

const canRun = env.NODE_ENV === "development";

export default async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    if (!canRun) res.status(400).json({ name: "server error" });

    // reading file
    const buffer = await fsp.readFile("data/xls/mpi.xlsx");
    const sheet = xlsx.read(buffer);
    const data = xlsx.utils.sheet_to_json<MPISheet>(
        sheet.Sheets["Updated Sheet"],
    );

    const renamedFields = {
        "M.G(avant contrôle)": "Moyenne Annuel",
    };

    const ignoreFunction = (e: string) =>
        !["Electronique +Système", "Physique 2 ( Magnétisme + Thermo )"].find(
            (e1) => e1 === e,
        );

    const fieldOrder = [];

    const groupedFields = getGroupedFields(
        data[0],
        ignoreFunction,
        fieldOrder,
        () => false,
    );

    const compareData = makeStudentData(
        data,
        groupedFields,
        renamedFields,
        (e) => v.titleCase(`${e.Nom}  ${e.Prenom}`),
        (e) => v.kebabCase(`${e.Nom}  ${e.Prenom}`),
        R.identity,
        R.identity,
    ).sort((a, b) => a.fullName.localeCompare(b.fullName));

    const mpiOutput: GenericFiliereResult = {
        filiere: { name: "mpi", year: 2021 },
        studentsResults: compareData,
    };

    await fsp.writeFile(
        "data/json/mpi-2021.json",
        JSON.stringify(mpiOutput, null, 2),
    );

    res.status(200).json(mpiOutput);
};
