const presidents = [
  {
    name: "Joe Biden",
    age: 74,
    isAlive: true,
    salary: 30.78,
    wife: null,
    isDivorced: undefined,
    car: ["BMW", "Range"],
    children: [
      {
        id: 1,
        name: "kim jong",
      },
      {
        id: 2,
        name: "vlamidir",
      },
    ],
  },
];

for (var president of presidents) {
  console.log(president.children[0].name);
}

const students = [
  {
    name: "Nadia",
    roll: 1,
    faculty: "NFS",
    result: [
      { math: "good" },
      { english: "good" },
      { chemistry: "bad" },
      { biology: "bad" },
    ],
  },
  {
    name: "Maria",
    roll: 2,
    faculty: "CSE",
    result: [
      { math: "good" },
      { english: "good" },
      { chemistry: "bad" },
      { biology: "bad" },
    ],
  },
];

for(var student of students){
  console.log(student.result[3].biology)
}

console.log(student.result[0].math)
