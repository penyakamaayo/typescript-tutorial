// let greet : Function

// // greet = 'hello'
// greet = () => {
//   console.log('Hello again!')
// }

// const add = (a: number, b: number, c?: number | string) => {
//   console.log(a + b)
//   console.log(c)
// }

// add(1, 9, 'Yoo')

// const minus = (a: number, b: number): number => {
//   return a + b
// }

// let result = minus(10, 7)

// type StringOrNum = string | number
// type objWithName = { name: string, uid: StringOrNum }

// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`)
// }

// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hi!`)
// }

// let greet: Function

// Function signature
// example 1
// let greet: (name: string, greeting: string) => void

// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`)
// }

// // example 2
// let calc: (x: number, y: number, z: string) => number

// calc = (num1: number, num2: number, action: string) => {
//   let result = num1 - num2
//   if (action == 'add') {
//     result = num1 + num2
//   }
//   return result
// }

// // example 3
// let logDetails: (obj: { name: string, age: number }) => void

// type person = { name: string, age: number }

// logDetails = (ninja: person) => {
//   console.log(`${ninja.name}'s age is : ${ninja.age} years old.`)
// }



