// const fs = require('fs')
// // const book={
// //     title: "Big Bang !",
// //     author: "murad"
// // }
// // const bookJSN = JSON. stringify(book)
// // console.log(bookJSN)
// // const bookData = JSON.parse(bookJSN)
// // console.log(bookData.author)
// //
// // fs.writeFileSync('test-json.JSON',bookJSN)
// const buffer = fs.readFileSync('test-json.JSON')
// const dataJSN = buffer.toString()
// //console.log(buffer.toString())
// const data = JSON.parse(dataJSN)
// console.log(data.title)
//Test Json: access those by json
const fs = require('fs')
const testBuffer = fs.readFileSync('test-json.JSON')
const testJSN = testBuffer.toString()
const data = JSON.parse(testJSN) //to convert text into a JavaScript object
data.name ='murad'
const usrdata = JSON.stringify(data)
fs.writeFileSync('test-json.JSON',usrdata)
console.log(data.name)

