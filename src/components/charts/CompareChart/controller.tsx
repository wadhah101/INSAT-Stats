import * as React from "react";
import StatelessCompareChart from "./stateless";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { GenericCompareObject } from "src/@types/GenericDataObject";

interface ICompareChartProps<T> {
    data: GenericCompareObject<T>[];
    groupedFields: string[][];
    renamedFields: Record<string, string>;
}

const CompareChart = <T extends unknown>({
    data,
    renamedFields,
    groupedFields,
}: React.PropsWithChildren<ICompareChartProps<T>>): JSX.Element => {
    const [indexA, setIndexA] = React.useState(
        Math.floor(Math.random() * data.length),
    );

    const handleChangeA = (event) => {
        setIndexA(event.target.value);
    };

    const [indexB, setIndexB] = React.useState(
        Math.floor(Math.random() * data.length),
    );

    const handleChangeB = (event) => {
        setIndexB(event.target.value);
    };

    return (
        <div>
            <div className="p-3 mb-4 border border-black md:mb-8 border-opacity-10 ">
                <div className="flex items-center justify-center">
                    <div className="m-2">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={indexA}
                            onChange={handleChangeA}
                        >
                            {data.map((e, ind) => (
                                <MenuItem key={ind} value={ind}>
                                    {e.fullName}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>

                    <p className="mx-2 text-xl font-semibold text-black text-opacity-70 ">
                        VS
                    </p>

                    <div className="m-2">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={indexB}
                            onChange={handleChangeB}
                        >
                            {data.map((e, ind) => (
                                <MenuItem key={ind} value={ind}>
                                    {e.fullName}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
            <StatelessCompareChart
                renamedFields={renamedFields}
                groupedFields={groupedFields}
                data={[data[indexA], data[indexB]]}
            />
        </div>
    );
};

export default CompareChart;
