//Reverse the string
const message:string = "hello world!";
const reverse: string = message.split('').reverse().join('');

console.log(reverse);


// Sorting an array of Int

const numbers: number[] = [4, 2, 5, 1, 3];

// Ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// Sorting an array of strings
const strings: string[] = ['banana', 'apple', 'cherry', 'date'];

// Ascending order (default)
strings.sort();
console.log(strings); // Output: ['apple', 'banana', 'cherry', 'date']

// Descending order
strings.sort((a, b) => b.localeCompare(a));
console.log(strings); // Output: ['date', 'cherry', 'banana', 'apple']
