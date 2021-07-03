export interface Filiere {
    name: string;
    year: number;
}

interface Meh {
    [K: string]: Record<string, number> | string;
}

export interface GenericStudentResult<T extends Meh | any> {
    data: Partial<T>;
    fullName: string;
    slug: string;
}

export interface GenericFiliereResult<T extends Meh | any> {
    filiere: Filiere;
    studentsResults: GenericStudentResult<T>[];
}
