// create objects
{};
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
for (let key in book){
    if (book[key] !== book2[key]){
        equal = false;
    }
}
for (let key in book2){
    if (book2[key] !== book[key]){
        equal = false;
    }
}
console.log(equal);

