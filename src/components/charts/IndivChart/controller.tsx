import * as React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { GenericCompareObject } from "src/@types/GenericDataObject";
import StatelessCompareChart from "../CompareChart/stateless";

interface ICompareChartProps<T> {
    data: GenericCompareObject<T>[];
    renamedFields: Record<string, string>;
    fieldMapper: (e: string, index: number, arr: string[]) => string;
    groupedFields: string[][];
}

const IndivChart = <T extends unknown>({
    data,
    fieldMapper,
    renamedFields,
    groupedFields,
}: ICompareChartProps<T>): JSX.Element => {
    const [indexA, setIndexA] = React.useState(
        Math.floor(Math.random() * data.length),
    );

    const handleChangeA = (event) => {
        setIndexA(event.target.value);
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
                </div>
            </div>
            <StatelessCompareChart
                renamedFields={renamedFields}
                groupedFields={groupedFields}
                fieldMapper={fieldMapper}
                data={[data[indexA]]}
            />
        </div>
    );
};

export default IndivChart;
