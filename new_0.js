document.body.innerHTML = <h1>JSjsj</h1>

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
  }

//   Example

// const myObj = {
//   top: "hat",
//   bottom: "pants"
// };

// myObj.hasOwnProperty("top");
// myObj.hasOwnProperty("middle");
// The first hasOwnProperty returns true, while the second returns false.

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },{
      "artist": "Rammshtein",
      "title": "best",
      "release_year": 1992,
      "formats": ["cd", "dvd", "mp3"]
    }
  ];

//   const ourMusic = [
//     {
//       "artist": "Daft Punk",
//       "title": "Homework",
//       "release_year": 1997,
//       "formats": [ 
//         "CD", 
//         "Cassette", 
//         "LP"
//       ],
//       "gold": true
//     }
//   ];