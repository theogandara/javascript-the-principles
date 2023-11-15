// Representated by IEEE 754 standard (64 bits)

// binary representations - 0b 0B
const binaryOf42 = 0b101010;
console.log(binaryOf42);

// octal representations - 0o 0O
const octalOf42 = 0o52;
console.log(octalOf42);

// hexadecimal representations - 0x 0X
const hexaOf255 = 0xFF;
console.log(hexaOf255);

// Number conversion
console.log(Number("0xFF"))
console.log(Number("0b1110"))
console.log(Number("0o10"))
console.log(Number("NotANumber"))

// Math API

// Constants
console.table({
    "Math.E": Math.E,
    "Math.LN10": Math.LN10,
    "Math.LN2": Math.LN2,
    "Math.LOG10E": Math.LOG10E,
    "Math.LOG2E": Math.LOG2E,
    "Math.PI": Math.PI,
    "Math.SQRT1_2": Math.SQRT1_2,
    "Math.SQRT2": Math.SQRT2,
})

// operations
const [numberPositive, numberNegative, numberDecimal] = [56, -54, 78.89]

const convertToPositiveSign = Math.abs(numberNegative)
const arroundToUp = Math.ceil(numberDecimal)
const arroundToDown = Math.floor(numberDecimal)
const arround_ToUp5_9__ToDown0_4 = Math.round(numberDecimal)
const return_1ToPositiveAndMinesOneToNegative = Math.sign(numberNegative)
const deleteDecimalPart = Math.trunc(numberDecimal)
console.table({
    convertToPositiveSign,
    arroundToUp,
    arroundToDown,
    arround_ToUp5_9__ToDown0_4,
    return_1ToPositiveAndMinesOneToNegative,
    deleteDecimalPart
})