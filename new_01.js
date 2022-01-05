// function updateRecords(records, id, prop, value) {
//     if (prop !== 'tracks' && value !== "") {
//       records[id][prop] = value;
//     } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//       records[id][prop] = [value];
//     } else if (prop === "tracks" && value !== "") {
//       records[id][prop].push(value);
//     } else if (value === "") {
//       delete records[id][prop];
//     }
//     return records;

// const myArray = [];

// for (let i = 0; i <= 9; i += 3) {
//     myArray.push(i);
//   }
//   console.log(myArray);

// const myArr = [2, 3, 4, 5, 6];

// let total = 0

// for(let i = 0; i < myArr.length; i++){
//  total += myArr[i];
// }
// console.log(total)

// function multiplyAll(arr) {
//     let product = 1;  
//   for(let i = 0; i < arr.length; i++){
//     for(let o = 0;o < arr[i].length; o++){
//      product *= arr[i][o];
//     } 
//   }
//     return product;
//   }
  
//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// const myArray = [];
// let i = 10;
//     do {
//         myArray.push(i); i++;
//     } while (i < 11)
         
// !!!!!!!_RECURSION_!!!!!!!!
// function sum(arr, n) {
//   if (n <= 0) {
//         return 0;
//       } else {
//         return sum(arr, n - 1) + arr[n - 1];
//       }
//   }

// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     }
  
    
//   ];
  
//   function lookUpProfile(name, prop) {
//     ; i++){
//       if(contacts[i].firstName === name) {
//         return contacts[i][prop] || "No such property";
//       }
//       }
//       return "No such contact"
//   }
  
//   lookUpProfile("Akira", "likes");

// function nextInLine(arr, item) {
//     arr.push(item)
//     item = arr.shift()
//     return item;
//   }
  
//   // Setup
//   const testArr = [1, 2, 3, 4, 5];
  
//   // Display code
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));

// function testLogicalAnd(val) {
//     if (val >= 25 && val <= 50) {
//         return "Yes";
//       }
//     return "No";
//   }
  
//   testLogicalAnd(10);

// function testSize(num) { 
//     if(num < 5){
//       return "Tiny"
//     }else if(num < 10){
//       return "Small"
//     }else if(num < 15){
//       return "Medium"
//     }else if(num < 20){
//       return "Large"
//     }else if(num >= 20){
//       return "Huge"
//     }
//     };
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  
if(strokes == 1){
  return names[0]
}else if(strokes <= par - 2){
  return names[1]
}else if(strokes == par - 1){
  return names[2]
}else if(strokes == par){
  return names[3]
}else if(strokes == par + 1){
  return names[4]
}else if(strokes == par + 2){
  return names[5]
}else if(strokes >= par + 3){
  return names[6]
}
};