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

