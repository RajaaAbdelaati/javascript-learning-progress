/* ============== Assignment Number [1] ============== */
console.log((10 * 20 * ((15 - 3 + 190) % 10)) % 400); // 0

console.log("---------------------------");
/* ---------------- S E P A R E T O R ---------------- */
/* ============== Assignment Number [2] ============== */

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * (true + true)); // 6

// Soultion Three
console.log((num ** num - num) / (true + true + true + true)); // 6

// Soultion Four
console.log(num * num - num); // 6

// Solution Five
console.log(num ** num % ((true + true) * num + true)); // 6

// Solution Six
console.log((num * num + num) / (true + true)); // 6

console.log("---------------------------");
/* ---------------- S E P A R E T O R ---------------- */
/* ============== Assignment Number [3] ============== */

let number = "10";

// Solution One
console.log(+number + +number); // 20

// Solution Two
console.log(+number * (true + true)); // 20

// Solution Three
console.log((+number * +number) / (+number / (true + true))); // 20

// Solution Four
console.log(
  (+number) ** (true + true + true) %
    (+number * (true + true + true + true + true) - true)
); // 20

// Solution Five
console.log(+number * (true + true + true) - +number);

console.log("---------------------------");
/* ---------------- S E P A R E T O R ---------------- */
/* ============== Assignment Number [4] ============== */

let points = 10;

points += true + true + true;
console.log(points); // 13

points -= true + true + true + true + true;
console.log(points); // 8;
