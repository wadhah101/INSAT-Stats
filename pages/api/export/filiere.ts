import { env } from "process";
import type { NextApiRequest, NextApiResponse } from "next";

const canRun = env.NODE_ENV === "development";

export default async (
    req: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    if (!canRun) res.status(400).json({ name: "server error" });

    res.status(200).json({});
};
