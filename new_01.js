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
// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
  
// if(strokes == 1){
//   return names[0]
// }else if(strokes <= par - 2){
//   return names[1]
// }else if(strokes == par - 1){
//   return names[2]
// }else if(strokes == par){
//   return names[3]
// }else if(strokes == par + 1){
//   return names[4]
// }else if(strokes == par + 2){
//   return names[5]
// }else if(strokes >= par + 3){
//   return names[6]
// }
// };

// CASE STATEMENT

// function caseInSwitch(val) {
//     let answer = "";
//   switch(val){
//     case 1: 
//     answer = "alpha";
//     break;
//     case 2: 
//     answer = "beta";
//     break;
//     case 3 :
//     answer = "gamma"
//     break;
//     case 4 :
//     answer = "delta"
//     break;
//   }
//     return answer;
//   }

// ТАК ЖЕ!!! """default"""

// function switchOfStuff(val) {
//     let answer = "";
//   switch(val){
//     case "a": answer = "apple";
//     break;
//     case "b" : answer = "bird"
//     break;
//     case "c" : answer = "cat"
//     break;
//     default : answer = "stuff";
//     break;
//   }
//     return answer;
//   }

// function sequentialSizes(val) {
//     let answer = "";
//   switch(val){
//     case 1:
//     case 2:
//     case 3:
//     answer = "Low";
//     break;
//     case 4:
//     case 5:
//     case 6:
//     answer = "Mid";
//     break;
//     case 7: 
//     case 8:
//     case 9:
//     answer = "High";
//     break;
//   }
//     return answer;
//   }

// function chainToSwitch(val) {
//     let answer = "";
//     switch(val){
//       case "bob": answer = "Marley";
//       break;
//       case 42: answer = "The Answer";
//       break;
//       case 1: answer = "There is no #1";
//       break;
//       case 99 : answer = "Missed me by this much!";
//       break;
//       case 7 : answer = "Ate Nine";
//       break;
//     }
//     return answer;
//   }

// simple!!
// function isLess(a, b) {
//      return a < b;
//   }

// function abTest(a, b) {
//   if(a < 0 || b < 0){
//     return undefined;
//   }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }

// const myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog["name"] = "Happy Coder";

// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog["bark"] = "woof";

// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
//   delete myDog.tails;

// let lookup {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chikago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank"
// }

// function phoneticLookup(val) {
//     let result = "";
//     let lookup = {
//       "alpha": "Adams",
//       "bravo": "Boston",
//       "charlie": "Chicago",
//       "delta": "Denver",
//       "echo": "Easy",
//       "foxtrot": "Frank"
//   }
//   result = lookup[val]
//     return result;
// }

// function checkObj(obj, checkProp) {
//     if(obj.hasOwnProperty(checkProp)) {
//       return obj[checkProp];
//       }else{
//         return "Not Found";
//       }
//   }

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];