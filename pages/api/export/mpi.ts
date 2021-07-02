import { env } from "process";
import type { NextApiRequest, NextApiResponse } from "next";
import * as fsp from "fs/promises";
import xlsx from "xlsx";
import v from "voca";
import {
    getGroupedFields,
    makeCompareData,
} from "src/utils/GlSheet/GenericCompareUtils";
import { MPIDataObject, MPISheet } from "src/@types/MPIDataObject";

const canRun = env.NODE_ENV === "development";

export default async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    if (!canRun) res.status(400).json({ name: "server error" });

    // reading file
    const buffer = await fsp.readFile("data/mpi.xlsx");
    const sheet = xlsx.read(buffer);
    const rawData = xlsx.utils.sheet_to_json<MPISheet>(
        sheet.Sheets["Updated Sheet"],
    );
    const data = rawData.map((e) => ({
        ...e,
        Nom: v.titleCase(e.Nom),
        Prenom: v.titleCase(e.Prenom),
    }));

    const renamedFields = Object.fromEntries([]);

    const ignoredField = [
        "Electronique +Système",
        "Physique 2 ( Magnétisme + Thermo )",
    ];

    const fieldOrder = [];

    const compareData = makeCompareData(
        data,
        ignoredField,
        fieldOrder,
        (e) => `${e.Nom}  ${e.Prenom}`,
        (e) => v.kebabCase(`${e.Nom}  ${e.Prenom}`),
    ).sort((a, b) => a.fullName.localeCompare(b.fullName));
    const groupedFields = getGroupedFields(
        data[0],
        ignoredField,
        fieldOrder,
        () => false,
    );

    const mpiOutput: MPIDataObject = {
        name: "MPI",
        fieldOrder,
        ignoredField,
        renamedFields,
        year: "2021",
        groupedFields,
        compareData,
    };

    res.status(200).json(mpiOutput);
};
