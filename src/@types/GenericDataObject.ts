export interface Filiere {
    name: string;
    year: number;
}

interface Meh {
    [K: string]: Record<string, number>;
}

export interface GenericStudentResult {
    data: Partial<Meh>;
    fullName: string;
    slug: string;
}

export interface GenericFiliereResult {
    filiere: Filiere;
    studentsResults: GenericStudentResult[];
}
