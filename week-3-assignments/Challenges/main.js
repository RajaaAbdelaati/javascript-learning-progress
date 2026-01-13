var a = 10;
var b = "20";
var c = 80;
console.log(++a + +b++ + +c++ - +a++);

/*
[++a] [+] [+] [b++] [+] [+] [c++] [-] [+] [a++]
[++a]
- Value: 11
- Explain: ++ is mean Pre Increment Operator
[+]
- Explain: is Adding Operator
[+]
- Explain: is Unary Plus Operator , Return Number
[b++]
- Value: 20
- Explain: ++ is Post Increment Operator 
[+]
- Explain: is Adding Operator
[+]
- Explain: is Unary Plus Operator , Return Number 
[c++]
- Value: 80
- Explain: ++ is Post Increment Operator 
[-]
- Explain: is Subtraction Operator 
[+]
- Explain: is Unary Plus Operator , Return Number 
[a++]
- Value: 11
- Explain: ++ is Post Increment Operator 
- The Solution Is : (11 + 20 + 80 - 11 = 100)
*/

var a = 10;
var b = "20";
var c = 80;
console.log(++a + -b + +c++ - -a++ + +a);

/*
[++a] [+] [-] [b] [+] [+] [c++] [-] [-][a++] [+] [+] [a]

[++a]
- Value: 11
- Explain: ++ is mean Pre Increment Operator
[+]
- Explain: is Adding Operator
[-]
- Explain: is Unary Negation Operator , Return Number With Negative Value
[b]
- Value: -20
- Explain: Because is Coming After Unary Negation
[+]
- Explain: is Adding Operator
[+]
- Explain: is Unary Plus Operator , Return Number 
[c++]
- Value: 80
- Explain: ++ is Post Increment Operator 
[-]
- Explain: is Subtraction Operator
[-]
- Explain: is Unary Negation Operator , Return Number With Negative Value
[a++]
- Value: 11
- Explain:  ++ is Post Increment Operator
[+]
- Explain: is Adding Operator
[+]
- Explain: is Unary Plus Operator , Return Number 
[a]
- Value: 12
- The Solution Is : (11 + -20 + 80 - -11 + 12 = 94)
*/

var a = 10;
var b = "20";
var c = 80;
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [--c] [+] [+] [b] [+] [--a] [*] [+] [b++] [-] [+] [b] [*] [a] [+] [--a] [-] [+] [true]
  
  [--c]
  - Value: 79
  - Explain: -- Is Pre Decrement Operator
  [+]
  - Explain: is Adding Operator 
  [+]
  - Explain: is Unary Plus Operator , Return Number 
  [b]
  - Value: 20
  [+]
  - Explain: is Adding Operator 
  [--a]
  - Value: 9
  - Explain: -- is Pre Decrement Operator
  [*]
  - Explain: is Multiplication Operator
  [+]
  - Explain: is Unary Plus Operator , Return Number 
  [b++]
  - Value: 20
  - Explain: ++ is Post Increment Operator
  [-]
  - Explain: is Subtraction Operator
  [+]
  - Explain: is Adding Operator 
  [b]
  - Value: 21
  [*]
  - Explain: is Multiplication Operator
  [a]
  - Value: 9
  [+]
  - Explain: is Adding Operator 
  [--a]
  - Value: 8
  - Explain: -- is Pre Decrement Operator
  [-]
  - Explain: is Subtraction Operator
  [+]
  - Explain: is Unary Plus Operator , Return Number 
  [-]
  - Explain: is Unary Negation Operator , Return Number With Negative Value
  [true]
  - Value: 1
  - Explain: True Is Boolean Number Return Number 1
  - The Solution Is : (79 + 20 + 9 * 20 - 21 * 9 + 8 - 1  = 97)
*/

/* -------------------- S E P A R E T O R -------------------- */
console.log("---------------------------------");

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); //2000
console.log(-d * +e + (f % g)); //2000

console.log(-d + ++f + ++e * ++g); // 173
