
//----------FOR OF LOOP-----------

// let arr=[0,1,2,3,4,5]

// for (const key of arr) {
//     console.log(` and ${arr[key]}  and${key}`)
// }
// const map=new Map();
// map.set("name","ggg")
// map.set("class","ghhhhgg")
// for (const [key,value] of map) {
//     console.log(key," ",value)
// }

//----but for of loop doesnot work on object------
// const myObj={
//     name:"nnnnnn",
//     class:"ghftfdudfj",
//     number:10000
// }
// for (const element of myObj) {
//     console.log(element)
// }

//---------------FOR IN LOOP--------

// let arr=[1,5,6,7,9,0]

// for (const [key,values] in arr) {
    
//    console.log(key," ",arr[key])
    
    
// }

//---------for in doesnot work on map
// const map1=new Map();
//  map1.set("name","ggg")
//  map1.set("class","ghhhhgg")

//  for (const [key,values] in map1) {
//     console.log(key," ",map1[key])
    
    
//  }

// let myObj={
//      name:"nnnnnn",
//      class:"ghftfdudfj",
//      number:10000
// }
// for (const key in myObj) {
//    console.log(key,myObj[key])
    
    
// }


//------for each-------------
//-----------------------------------------
//-----------------------
//--------for each loop does not return anY value and we gve a function as value to eachloop----
//-----------------------------------------
//---------------------------------------------
//---we can take item,index or full array through parameter for each loop in array 

// const number=[2,3,4,5,6]
// number.forEach((key,value)=>{
//     console.log(key,value)
// })
//---------------------------------------

// let arr=[
//     {
//     name:"js",
//     fullName :"javascript"
//    },
//     {
//     name:"py",
//     fullName  :"python"
//    },
//     {
//     name:"cpp",
//     fullName :"c++"
//    }
// ]
// arr.forEach((element) => {
//     console.log(element.fullName)
//     console.log(element.name)
// });


/////////////////////////////////////////
/////////////////////////////////////////
//////////////////////////////////////////
//-============FILTER LOOP===================
//////////////////////////////////////////////////

// const number=[2,3,4,5,6,8,9,0]

// const newNumbers = number.filter((item)=> item > 2 && item <8)  //implicit function------ in this line
// console.log(newNumbers)

//===========================================
//========map method===============

const number=[2,3,4,5,6,8,9,0]

// const newNumber=number.map((num)=> num + 10)
// console.log(newNumber)
//=========chaining
// const newNumber=number.map((item)=>item *10).map((item)=> item + 1).filter((item)=> item >40)
// console.log(newNumber)

//=======REDUCE METHOD====================

// const total=number.reduce((acc,curr)=>(acc + curr),0)

// console.log(total)



//==============SHOPPING CART======================

let arr=[
    {
    name:"js",
    fullName :6000
   },
    {
    name:"py",
    fullName  :6000
   },
    {
    name:"cpp",
    fullName :8000
   }
]

let total=arr.reduce((acc,curr)=>(acc + curr.fullName ),0)
console.log(total)