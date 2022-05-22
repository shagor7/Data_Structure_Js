// linear seacrh in js

// function linearaSearch(array, num) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == num) {
//             return i;
//         }
//     }
//     return -1;
// }

function updatedLinear(array, num) {
    let length = array.length;
    let left = 0;
    let right = length - 1;
    let position = -1;
    while (left <= right) {
        if (array[left] == num) {
            position = left;
            console.log(`${num} found at index ${position}, Attempts: ${left + 1}`);
            break;
        }
        if (array[right] == num) {
            position = right;
            console.log(`${num} found at index ${position}, attempts: ${length - right}`);
            break;
        }
        left++;
        right--;
    }
    if (position == - 1) {
        console.log('element not found');
    }
}

const numbers = [3, 14, 56, 34, 7, 89, 26]

//const result = linearaSearch(numbers, 56);

updatedLinear(numbers, 56)

// if (result == -1) {
//     console.log('element not found');
// } else {
//     console.log(`element found at index ${result}`);
// }