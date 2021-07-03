import * as R from "ramda";
import { GenericStudentResult } from "src/@types/GenericDataObject";

// sorts fields #1
export const getSortedFields = <T>(
    inp: T,
    ignoreFunction: (e: string) => boolean,
    fieldOrder: string[],
): string[] => {
    const fields = Object.keys(inp)
        .filter((e) => Number(inp[e]))
        .filter(ignoreFunction);

    return [...fields].sort(
        (x, y) =>
            fieldOrder.findIndex((e1) => e1 === y) -
            fieldOrder.findIndex((e1) => e1 === x),
    );
};

// groups fields #2
export const getGroupedFields = <T>(
    e: T,
    ignoreFunction: (e: string) => boolean,
    fieldOrder: string[],
    equalityFunction: (x: string, y: string) => boolean,
): string[][] =>
    R.groupWith<string>(equalityFunction)(
        getSortedFields(e, ignoreFunction, fieldOrder),
    );

// renames field #3
export const getRenamedField = (
    e: string,
    renamedFields: Record<string, string>,
): string => renamedFields[e] || e;

// generate json data #3
export const makeStudentData = <T>(
    inp: T[],
    groupedFields: string[][],
    renamedFields: Record<string, string>,
    fullNameFactory: (e: T) => string,
    slugFactory: (e: T) => string,
    groupingFunction: (e: string) => string,
    ungroupingFunction: (e: string) => string,
): GenericStudentResult[] => {
    return inp.map((x) => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: Object.fromEntries(
            groupedFields.map((e) => {
                if (e.length === 1) return [e[0], { [e[0]]: x[e[0]] }];

                const a = Object.fromEntries(
                    e.map((y) => [ungroupingFunction(y), x[y]]),
                );

                return [
                    getRenamedField(groupingFunction(e[0]), renamedFields),
                    a,
                ];
            }),
        ),
        fullName: fullNameFactory(x),
        slug: slugFactory(x),
    }));
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeChartData = (input: GenericStudentResult[], field: string) => {
    const fields = Object.keys(input[0].data[field]);
    return {
        labels: fields,
        datasets: input.map((person, index) => ({
            label: person.fullName,
            data: fields.map((e) => person.data[field][e]),
            backgroundColor:
                index % 2
                    ? "rgba(247, 39, 84, 0.2)"
                    : "rgba(54, 162, 235, 0.2)",

            borderColor:
                index % 2 ? "rgba(247, 39, 84, 1)" : "rgba(54, 162, 235, 1)",
            borderWidth: 1,
        })),
    };
};
