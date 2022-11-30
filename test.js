const book={
    title: "Big Bang !",
    author: "murad"
}
const bookJSN = JSON. stringify(book)

console.log(bookJSN)

const bookData = JSON.parse(bookJSN)
console.log(bookData.author)