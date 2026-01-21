// const user={
//     id :1001,
//     name : "nauman"
// }
// const user2={rollNo : 123, email : "nuamn@google.com"}
// // methods for collecting objects in an array----
// // const mainUser=Object.assign(user,user2)
// const mainUser={...user,...user2}
//--------------------------
// console.log("merged object",mainUser)
// console.log("keys",Object.keys(user))
// console.log("values",Object.values(user))
// console.log(Object.entries(user))
// console.log(mainUser.hasOwnProperty("id"))

//----------destructuring of object--------------
const course={
    name : "js",
    teacher : "numan"
}
const {name}=course

console.log(name)
