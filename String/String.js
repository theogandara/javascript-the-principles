// ways to declare
console.table({
    1: "Javascript",
    2: 'Javascript',
    3: `Javascript`,
})

// Scape special characters
console.log("Please write \"Théo Gândara\"")
console.log("Please write Théo Gândara after \\n Ok ?")

// Template literal
const nameUser = "Théo Gândara"
console.log(`His name is ${nameUser}`)

// String API
const surnameUser = "GAndAra"

const ExLowerCase = surnameUser.toLowerCase()
const ExUpperCase = surnameUser.toUpperCase()
const ExIndexOf = surnameUser.indexOf("A")
const ExLastIndexOf = surnameUser.lastIndexOf("A")
const ExLength = surnameUser.length

console.table({
    ExLowerCase,
    ExUpperCase,
    ExIndexOf,
    ExLastIndexOf,
    ExLength
})

const ExCharAt = surnameUser.charAt(1)
const ExCharCodeAt = surnameUser.charCodeAt(1)
const ExFromCharCode = String.fromCharCode(66)

console.table({
    ExCharAt,
    ExCharCodeAt,
    ExFromCharCode
})

console.table({
    "includes": surnameUser.includes("GAn"),
    "startsWith": surnameUser.startsWith("GAn"),
    "endsWith": surnameUser.endsWith("dAra"),
    "replace": surnameUser.replace("dAra", "dara"),
    "replaceREGEXP": surnameUser.replace(/[Aa]/g, 4),
    "replaceAll": surnameUser.replaceAll("A", "a"),
    "search": surnameUser.search(/2/), // if find 1, else -1
    "split": surnameUser.split("A"),
    "split+join": surnameUser.split("A").join("a"),
    "slice": surnameUser.slice(0, 5),
    "slice+negative": surnameUser.slice(0, -2),
})

