// 1-Homework
// 1-String

// let name = "Joxn";
// alert(`Hello ${1}`);
// alert(`Hello ${"name"}`);
// alert(`Hello ${name}`);

// 2-Prefix and Postfix
// let a = 1,
//   b = 1;

// let c = ++a;
// let d = b++;
// console.log(c, d);

// 3-Assinment result
// let a = 10;
// let x = 1 + (a *= 2);
// console.log(x);

// 4-Type Conversion

console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("-9" + 5); // -95
console.log("-9" - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log("\t \n" - 2); // -2

// null
let a = "";
console.log(a);
// undefined
let b;
console.log(b);

// 5-comparisons

console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false
