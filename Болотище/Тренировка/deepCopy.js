const obj1 = {
  name: "John",
  age: 30,
  size: {
    weight: 60,
    height: 180,
  },
  arr: [{ a: 1, b: { c: 3 } }, 1],
  someProp: null,
};

function createCopyObj(obj) {
  const copy = {};
  createKeysForCopy(copy, obj);
  return copy;
}

function createKeysForCopy(copy, origin) {
  for (let key in origin) {
    if (typeof origin[key] === "object" && origin[key] !== null) {
      copy[key] = {};
      createKeysForCopy(copy[key], origin[key]);
    } else {
      copy[key] = origin[key];
    }
  }
}

const copy = createCopyObj(obj1);

obj1.arr[0].a = 10;
obj1.arr[1] = 20;
obj1.size.weight = 55;
copy.someProp = "Link";

console.log(obj1);
console.log(copy);
