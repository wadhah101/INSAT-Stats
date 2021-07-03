export interface Filiere {
    name: string;
    year: number;
}

interface Meh {
    [K: string]: Record<string, number> | string;
}

export interface GenericCompareObject<T extends Meh | any> {
    data: Partial<T>;
    fullName: string;
    slug: string;
}

export interface GenericDataObject<T extends Meh | any> {
    name: string;
    year: string;
    compareData: GenericCompareObject<T>[];
}
