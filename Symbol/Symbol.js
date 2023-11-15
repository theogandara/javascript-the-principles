// Symbol is a primitive type

const nameUser = Symbol("theo")
const nameFirstSurname = Symbol("pedicino")
const nameLastSurname = Symbol("gandara")

console.log(nameUser === nameFirstSurname)

let regexp = /Javascript/
// console.log("/Javascript/".startsWith(regexp)) // error here, because regex is RegExp and not a String
regexp[Symbol.match] = false
console.log("/Javascript/".startsWith(regexp))