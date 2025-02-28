//Задание 1.1
function findMax(numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
let numbers = [1, 6, 3];
console.log(findMax(numbers));
