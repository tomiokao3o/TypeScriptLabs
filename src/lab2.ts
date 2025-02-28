//Задание 1.1
function findMax(numbers: number[]): number {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

let numbers: number[] = [1, 6, 3];
console.log(findMax(numbers));

//Задание 1.2
function findOdd(matrix: string[][]): boolean[][] {
    return matrix.map(row => row.map(value => value.length % 2 != 0));
}

let matrix: string[][] = [
    ["123", "f", "dddd"],
    ["d", "dd", "dddddd"]
];
console.log(findOdd(matrix));

//Задание 2
type numbers = [number, number];

function compareDigits(tuple: numbers): boolean {
    let firstSum: number = 0;
    let secondSum: number = 0;
    while (tuple[0] != 0) {
        firstSum += tuple[0] % 10;
        tuple[0] = Math.floor(tuple[0] / 10);
    }
    while (tuple[1] != 0) {
        secondSum += tuple[1] % 10;
        tuple[1] = Math.floor(tuple[1] / 10);
    }
    return firstSum == secondSum;
}

console.log(compareDigits([333, 413]));

//Задание 3
enum NitrogenousBase {
    Glycine = "Глицин",
    Cytosine = "Цитозин",
    Thymine = "Тимин"
}

console.log(NitrogenousBase.Thymine)

//Задание 4
class Pet {
    name: string = 'Some pet'
    age: number = -1

    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;

    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak() {
        return "Miyau!";
    }
}

function printInfo<T extends Pet>(pet: T) {
    console.log(pet);
    console.log(pet.speak());
}

printInfo(new Cat());
printInfo(new Dog());

//Задание 5

type AminoAcid = {
    name: NitrogenousBase,
    size: number
}
const acid: AminoAcid = {
    name: NitrogenousBase.Cytosine,
    size: 3
}
console.log(JSON.stringify(acid));