// Define type of variable
const firstName: string = 'Tommy'
const age: number = 27;

// Define type of array
let programmingLanguages: string[] = ['javascript', 'ruby', 'python']
programmingLanguages.push('golang');

// Define type in object
interface IProgrammingLanguage {
  name: string;
  awesome: boolean;
  age?: number;
}

const typeScript: IProgrammingLanguage = {
  name: 'typescript',
  awesome: true
}

const python: IProgrammingLanguage = {
  name: 'python',
  awesome: false
}

// Define argument type in functions
const increment = (counterVal: number) => {
  return counterVal + 1;
}

const counter: number = increment(10);


// https://www.youtube.com/watch?v=-w1i-gARuJs

// https://www.youtube.com/watch?v=1jMJDbq7ZX4

// https://www.youtube.com/watch?v=bjnW2NLAofI

// https://www.youtube.com/watch?v=BwuLxPH8IDs