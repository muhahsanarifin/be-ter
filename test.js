// Test 1
const leftTriangle = (input) => {
  let output = "",
    idx,
    anotherIdx = 0;

  for (idx = 1; idx <= input; idx++) {
    for (anotherIdx = 0; anotherIdx < idx; anotherIdx++) {
      output += "*";
    }
    output += "\n";
  }

  return output;
};

const input = 5;

console.log(leftTriangle(input));

// Test 2
const switchValueVariable = (a, b) => {
  const output = ([a, b] = [b, a]);

  return output;
};

let a = 10,
  b = 5;

const result = switchValueVariable(a, b);

console.log("a :", result[0], "b :", result[1]);

// Test 3
const sortAge = (arrOfObj) => {
  let idx, anotherIdx, temp;
  for (idx = 0; idx < arrOfObj.length; idx++) {
    for (anotherIdx = idx; anotherIdx < arrOfObj.length; anotherIdx++) {
      if (arrOfObj[idx].age > arrOfObj[anotherIdx].age) {
        temp = arrOfObj[idx];
        arrOfObj[idx] = arrOfObj[anotherIdx];
        arrOfObj[anotherIdx] = temp;
      }
    }
  }
  return arrOfObj;
};

const arrOfObj = [
  {
    nama: "Budi",
    age: 30,
  },
  {
    nama: "Tejo",
    age: 17,
  },
  {
    nama: "Bejo",
    age: 23,
  },
  {
    nama: "Harjo",
    age: 20,
  },
];

console.log(sortAge(arrOfObj));
