// // -------question no 1
// const arr1=[1,2,3,4,5]

// function sum(arr1){
//     let sum=0;
//     for(let i=0;i<arr1.length;i++){
//         sum= sum + arr1[i];
        
//     }
//     return sum;
// }
// console.log(sum(arr1))


// //  question 2 .....

// let numbers=[10,25,34,32,11,8]
// let result=maxFinder(numbers);


// function maxFinder(numbers){
//     if(Array.isArray(numbers) == false || numbers.length === 0){
//         return [];
//     }

//   let largestNumber=arr1[0];
//   for(let i=0;i<numbers.length;i++){
//    if(largestNumber<numbers[i]){
//     largestNumber=numbers[i];

//    }
//   }
//   return largestNumber;
// }




// // 3rd question

// let arr3=[11,34,56,77,99,98]

//     function evenFinder(arr3){
//         let evenCounter=0;
//         for(let i=0;i<arr3.length;i++){
//             if(arr3[i] % 2==0){
//                evenCounter=evenCounter + 1;
//             }
//         }
//         return evenCounter;
//     }

//     console.log(evenFinder(arr3))

//     // 4th question -----

//     let arr4=[1,2,3,4,5,6]

//     function reverseNumber(arr4){
//        let i=0;
//        let j=arr4.length - 1;
//        while(i<j){
//         let temp=arr4[i];
//         arr4[i]=arr4[j];
//         arr4[j]=temp;
//         i++;
//         j--;
//        }
//       return arr4;
//     }
    
//     console.log(reverseNumber(arr4))
    
//     // --------remove duplicates-------
// //     let numbers=[1,2,2,4,3,4,5,3]
    
// //     if(numbers.length===0 || Array.isArray(numbers)== false){
// //     return [];
   
// //       }

// // function removeDuplicates(numbers){ 
// //     let uniqueNumbers=[];
// //     for(let i=0;i<numbers.length;i++){
// //      if(uniqueNumbers.includes(numbers[i])==false){
// //      uniqueNumbers.push(numbers[i])
// //     }

// //  }
// //  return uniqueNumbers;
// // }
// //  return removeDuplicates(numbers);


// new programs -----------


// let numbers=[10,-1,45,13,78,98,23]

// function maxFinder(numbers){
//     if(Array.isArray(numbers) == false || numbers.length < 2){
//         return null;
//     }
  
//  let uniqueNumbers=[...new Set(numbers)];

//  if(uniqueNumbers.length < 2){
//     return null;
//  }
//   //-------------1st loop for first largest-------------

//   let largestNumber=uniqueNumbers[0];
//   for(let i=1;i<uniqueNumbers.length;i++){
//    if(largestNumber<uniqueNumbers[i]){
//     largestNumber=uniqueNumbers[i];
    
//    }
//   }
//   //-------splice method for removing first largest------------
//  uniqueNumbers.splice(uniqueNumbers.indexOf(largestNumber),1) ;
 

//  //----------2nd loop for 2nd largest ---------------
//  let secondLargest=uniqueNumbers[0]
//   for(let i=1;i<uniqueNumbers.length;i++){
//    if(secondLargest<uniqueNumbers[i]){
//     secondLargest=uniqueNumbers[i];
// }

// }
// return secondLargest;
// }
// console.log(maxFinder(numbers))

   //-------------------------------\\
  //------new problem----------------\\
 //-----------------------------------\\
let numbers=[1,2,3,4,4,3,3,2,1]
function frequencyCounter(numbers){
   if(Array.isArray(numbers) == false || numbers.length === 0){
        return null;
   }
   let obj={};
   for(i=0;i<numbers.length;i++){
    if(obj)
    obj.numbers[i]=1
   }
   return obj;
}
console.log(frequencyCounter(numbers))