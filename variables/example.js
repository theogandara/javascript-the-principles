// VAR - declared in global scope and can be redeclared and reassigned (avoid using)
var pi = 3.14
console.log(pi)

var pi = 3.14
console.log(pi)

// LET - has limited scope, cannot be redeclared but can be reassigned
let piLet = 3.14
console.log(piLet)

// CONST - limited in scope, cannot be redeclared or reassigned
const piConst = 3.14;
console.log(piConst);

// you can also declare a variable globally without using LET or VAR or CONST (not recommended)
(function() {
    variavelGlobal = 3.14
})();

console.log(variavelGlobal);

// valid identifiers
let $1 = 1;
let _1 = 2;
let $ = 3;
let _ = 4;