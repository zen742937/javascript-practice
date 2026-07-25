let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// 測試：
console.log(lookUpProfile("Akira", "likes"));    // ["Pizza","Coding","Brownie Points"]
console.log(lookUpProfile("Harry", "number"));   // "0994372684"
console.log(lookUpProfile("Sherlock", "likes")); // ["Intriguing Cases","Violin"]
console.log(lookUpProfile("Akira", "address"));  // "No such property"
console.log(lookUpProfile("Bob", "likes"));      // "No such contact"
