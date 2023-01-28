/* javascript example

const fetchData = (apiUrl) => {
  return fetch(apiUrl)
    .then((response) => response.json());
}

const data = fetchData("myAwesomeApi.com/data/subscribe");
console.log(data.name)
console.log(data.email)
console.log(data.age)
console.log(data.isMarried)

*/

// create interface
interface IUser {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
}

// declare type for function name, parameter and return (returning a promise) which needs an interface
const fetchData = (apiUrl: string): Promise<IUser> => {
  return fetch(apiUrl)
    .then((response) => response.json())
}