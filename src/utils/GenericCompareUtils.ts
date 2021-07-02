import * as R from "ramda";
import { GenericCompareObject } from "src/@types/GenericDataObject";

export const getRenamedField = (
    e: string,
    renamedFields: Record<string, string>,
): string => renamedFields[e] || e;

export const getSortedFields = <T>(
    inp: T,
    ignoredField: string[],
    fieldOrder: string[],
): string[] => {
    const fields = Object.keys(inp)
        .filter((e) => Number(inp[e]))
        .filter((e) => !ignoredField.find((e1) => e1 === e));

    return [...fields].sort(
        (x, y) =>
            fieldOrder.findIndex((e1) => e1 === y) -
            fieldOrder.findIndex((e1) => e1 === x),
    );
};

export const getGroupedFields = <T extends Record<string, string | number>>(
    e: T,
    ignoredField: string[],
    fieldOrder: string[],
    equalityFunction: (x: string, y: string) => boolean,
): string[][] =>
    R.groupWith<string>(equalityFunction)(
        getSortedFields(e, ignoredField, fieldOrder),
    );

export const makeCompareData = <T extends Record<string, string | number>>(
    inp: T[],
    ignoredField: string[],
    fieldOrder: string[],
    fullNameFactory: (e: T) => string,
    slugFactory: (e: T) => string,
): GenericCompareObject<T>[] => {
    const a = inp[0];
    const sortedFields = getSortedFields(a, ignoredField, fieldOrder);
    return inp.map((x) => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: Object.fromEntries(sortedFields.map((e) => [e, x[e]])) as any,
        fullName: fullNameFactory(x),
        slug: slugFactory(x),
    }));
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeChartData = <T>(
    input: GenericCompareObject<T>[],
    fields: string[],
    fieldMapper: (e: string, ind: number, arr: string[]) => string,
) => {
    return {
        labels: fields.map(fieldMapper),
        datasets: input.map((person, index) => ({
            label: person.fullName,
            data: fields.map((field) => person.data[field]),
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
