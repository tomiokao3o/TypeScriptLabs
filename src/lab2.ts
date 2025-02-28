//Задание 1.1
function findMax(numbers: number[]): number {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

let numbers: number[] = [1, 6, 3];
console.log(findMax(numbers));

//Задание 1.2
