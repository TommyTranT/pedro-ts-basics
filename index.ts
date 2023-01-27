// Define type of variable
const firstName: string = 'Tommy'
const age: number = 27;

// Define type of array
let programmingLanguages: string[] = ['javascript', 'ruby', 'python']
programmingLanguages.push('golang');

// Define argument type in functions
const increment = (counterVal: number) => {
  return counterVal + 1;
}

const counter: number = increment(10);