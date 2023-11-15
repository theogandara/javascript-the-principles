// create objects
{ };
new Object();
Object.create(null);

// create objects with properties
const book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    available: true
};
console.log(book);

// shorthand properties
const authorName = 'Robert C. Martin';
const book2 = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    pages: 464,
    language: 'English',
    available: true
};
console.log(book2);

// object destructuring
const { title, author } = book;

// object comparing - algorithm
let equal = true;
for (let key in book) {
    if (book[key] !== book2[key]) {
        equal = false;
    }
}
for (let key in book2) {
    if (book2[key] !== book[key]) {
        equal = false;
    }
}
console.log(equal);

// inheritance
const functionalLanguage = {
    paradigm: 'functional'
}
// using inheritance to reuse properties, defining a common prototype
const javascript = {
    creator: "theo gandara",
    __proto__: functionalLanguage
}
const elixir = {
    creator: "theo pedicino",
    __proto__: functionalLanguage
}
console.log(javascript)
// the paradigm property won't be present in the log, because it doesn't belong to the prototype of the objects it was inherited from, but if we try to access this property it will be there.
console.log(javascript.paradigm)

// other ways to do this
const tgLanguage = {
    creator: "theo language"
}
Object.setPrototypeOf(tgLanguage, functionalLanguage)
console.log(Object.getPrototypeOf(tgLanguage))
// likewise, it happens here, the property is of your prototype and not directly yours
console.log(tgLanguage.hasOwnProperty("paradigm"))

// object assign
const userAddress = {
    street: "Av Roses"
}
const userContact = {
    phone: "123 123 123"
}
const userInfos = {
    age: 25
}
const userComplete = Object.assign(userInfos, userContact, userAddress)
console.log(userComplete)

