import { GenericCompareObject, GenericDataObject } from "./GenericDataObject";

export interface MPISheet {
    Nom: string;
    Prenom: string;
    "M.G(avant contrôle)": string;
    Ana1: string;
    Algb1: string;
    "Math 1": string;
    Ana2: string;
    Algb2: string;
    "Math 2": string;
    MoyMath: string;
    Electronique: string;
    Système: string;
    Electrostatique: string;
    Electromagnétisme: string;
    Circuit: string;
    Méca: string;
    Optique: string;
    Thermo: string;
    "Electronique +Système": string;
    "Physique 2 ( Magnétisme + Thermo )": string;
    "Electricité ( Circuit + Electroqtatique )": string;
    "Physique 1 (Optique + Mécanique )": string;
    Français1: string;
    Français2: string;
    English1: string;
    English2: string;
    Droit: string;
    Economie: string;
    CultureGénérales: string;
    Algo1: string;
    Prog1: string;
    "MoyInfo 1": string;
    Algo2: string;
    Prog2: string;
    "Moy Info 2": string;
    MoyInfo: string;
    "Moyenne Sem 1": string;
    "Moyenne Sem 2": string;
    "Moyenne Gen": string;
    "Rang MPI": number;
    ScoreIMI: string;
    "Rang IMI": number;
    ScoreIIA: string;
    "Rang IIA": number;
    ScoreGL: string;
    "Rang GL": number;
    ScoreRT: string;
    "Rang RT": number;
}

export type MPICompareObject = GenericCompareObject<MPISheet>;

export type MPIDataObject = GenericDataObject<MPISheet>;
