import { env } from "process";
import type { NextApiRequest, NextApiResponse } from "next";
import * as fsp from "fs/promises";
import xlsx from "xlsx";
import v from "voca";
import { Gl3Sheet } from "src/@types/GL3DataObject";
import { getGroupedFields, makeStudentData } from "src/utils/chartData.utils";
import { GenericFiliereResult } from "src/@types/GenericDataObject";

const canRun = env.NODE_ENV === "development";

export default async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    if (!canRun) res.status(400).json({ name: "server error" });

    // reading file
    const buffer = await fsp.readFile("data/xls/GL3.xls");
    const sheet = xlsx.read(buffer);
    const data = xlsx.utils.sheet_to_json<Gl3Sheet>(sheet.Sheets["GL3"]);

    const renamedFields = Object.fromEntries([
        ["MOY_ANN", "Moyenne Annuel"],
        ["B00", "R.O"],
        ["B01", "Modélisation des systeme"],
        ["B02", "Logique"],
        ["B03", "Complexité des algorithmes"],
        ["B04", "bas niveau"],
        ["B05", "Unix"],
        ["B06", "réseaux"],
        ["B07", "JEE"],
        ["B08", "UML"],
        ["B09", "Anglais 1"],
        ["B10", "Francais 1"],
        ["B11", " Sociologie"],
        ["B12", "Communication"],
        ["B13", "Analyse numerique"],
        ["B14", "Optimisation"],
        ["B15", "Programmation logique"],
        ["B16", "Algo avance"],
        ["B17", "systeme repartis"],
        ["B18", ".NET"],
        ["B19", "Scrum"],
        ["B20", "Base Donne"],
        ["B21", "Anglais 2"],
        ["B22", "Francais 2"],
        ["B23", "Arabe"],
        ["B24", "Marketing"],
        ["B25", "PPP"],
    ]);

    const ignoreFunction = (e: string) =>
        !["IDENTIF", "NUM_INS", "TEST", "TEST1"].find((e1) => e1 === e) &&
        !e.startsWith("MGM");

    const fieldOrder = ["RANG", "MOY_ANN"];

    const groupedFields = getGroupedFields(
        data[0],
        ignoreFunction,
        fieldOrder,
        (x, y) => x.slice(-3) === y.slice(-3),
    );

    // making comparison data
    const compareData = makeStudentData(
        data,
        groupedFields,
        renamedFields,
        (e) => v.titleCase(`${e.NOM}  ${e.PRENOM}`),
        (e) => v.kebabCase(`${e.NOM}  ${e.PRENOM}`),
        (e) => e.slice(-3),
        (e) => e.slice(0, -3),
    ).sort((a, b) => a.fullName.localeCompare(b.fullName));

    const glOutput: GenericFiliereResult = {
        filiere: {
            name: "gl3",
            year: 2021,
        },
        studentsResults: compareData,
    };

    await fsp.writeFile(
        "data/json/gl3-2021.json",
        JSON.stringify(glOutput, null, 2),
    );

    res.status(200).json(glOutput);
};
