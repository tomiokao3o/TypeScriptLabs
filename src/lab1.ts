//2 задание
const modulo =
    (a: number, b: number): number => {
        return a % b;
    }
console.log(modulo(12, 6));

//3 задание

const a: number = 8;
let b: string = "gg";

interface Obj1 {
    id: number;
    name?: string;
}

const c: Obj1 = {id: 1}
let d: Obj1 = {id: 2, name: "wp"};

//4 задание
interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: number;
}

const data: ToJsonStringify = {
    id: 6,
    e1: null,
    e2: 28,
}

console.log(JSON.stringify(data));