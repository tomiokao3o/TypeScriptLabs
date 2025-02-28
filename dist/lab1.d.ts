declare const modulo: (a: number, b: number) => number;
declare const a: number;
declare let b: string;
interface Obj1 {
    id: number;
    name?: string;
}
declare const c: Obj1;
declare let d: Obj1;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: number;
}
declare const data: ToJsonStringify;
