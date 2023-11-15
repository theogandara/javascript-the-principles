console.log(typeof true)
console.log(typeof false)

// Boxing
console.log(typeof new Boolean(true))
console.log(typeof new Boolean(false))

const condition = new Boolean(false)
if (condition) {
    console.log("Question: why i appear here ??")
    console.log("Answer: type coercion, object was forced to behave as a boolean")
}
// the only ways to return false
console.table({
    1: !!0,
    2: !!NaN,
    3: !!"",
    4: !!false,
    5: !!undefined,
    6: !!null,
})