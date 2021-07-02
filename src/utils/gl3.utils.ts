export const gl3FieldMapper = (e: string, _: number, arr: string[]): string =>
    arr.length > 1 ? e.slice(0, -3) : e;
