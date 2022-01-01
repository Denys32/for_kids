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
         
//!!!!!!!_RECURSION_!!!!!!!!
// function sum(arr, n) {
//   if (n <= 0) {
//         return 0;
//       } else {
//         return sum(arr, n - 1) + arr[n - 1];
//       }
//   }

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    }
  
    
  ];
  
  function lookUpProfile(name, prop) {
    ; i++){
      if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
      }
      }
      return "No such contact"
  }
  
  lookUpProfile("Akira", "likes");
