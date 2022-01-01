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

const myArr = [2, 3, 4, 5, 6];

let total = 0

for(let i = 0; i < myArr.length; i++){
 total += myArr[i];
}
console.log(total)


