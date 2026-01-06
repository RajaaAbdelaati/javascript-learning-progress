// ============ Assignment Number [1] ============
/*
- Code number 1 does not work
- Because JavaScript is executed line by line 
- Code 1 is writen before the h1 element
- So that when the page is loaded code 1 does not execute because it come first before h1
- Code number 2 and 3 work correctly  
*/

// ============ Assignment Number [2] ============
document.write("<h1>Elzero</h1>");
document.querySelector("h1").classList.add("elzero-title");
// ============ Assignment Number [3] ============
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold;",
  "color: #FFF; background-color: blue; font-size: 40px;"
);
// ============ Assignment Number [4] ============
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

// ============ Assignment Number [5] ============
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);
// ============ Assignment Number [6] ============

// ======= First Way =======
// console.log("Iam In Console");
// document.write("Iam In Page");

// ======= Second Way =======
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
