let regExp = /\w+@\w+\.[a-z]{2,5}/

let validMail = "theogandara@gmail.com"
let invalidMail = "theogandara.com"

console.table({
    validMail: regExp.test(validMail),
    invalidMail: regExp.test(invalidMail),
})

// metacharacters
// \w - [a-zA-Z0-9]
// \W - [^a-zA-Z0-9]
// \d - [0-9]
// \D - [^0-9]
// \s - white space
// \S - not white space
// \n - break row
// \t - tab