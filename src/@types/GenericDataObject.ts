export interface GenericCompareObject<T> {
    data: Partial<T>;
    fullName: string;
    slug: string;
}

export interface GenericDataObject<T> {
    name: string;
    fieldOrder: string[];
    ignoredField: string[];
    renamedFields: Record<string, string>;
    year: string;
    groupedFields: string[][];
    compareData: GenericCompareObject<T>[];
}
