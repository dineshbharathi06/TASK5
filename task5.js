


// 1. forEach() to print 5 numbers
let numbers1 = [10, 20, 30, 40, 50];
numbers1.forEach(function(num) {
    console.log(num);
});

// 2. forEach() to print Hello with student names
let students1 = ["Dinesh", "Arun", "Kumar"];
students1.forEach(function(name) {
    console.log("Hello, " + name);
});

// 3. map() to multiply each number by 2
let numbers2 = [1, 2, 3, 4, 5];
let result1 = numbers2.map(function(num) {
    return num * 2;
});
console.log(result1);

// 4. map() to add 100 to every price
let prices1 = [200, 300, 400, 500];
let result2 = prices1.map(function(price) {
    return price + 100;
});
console.log(result2);

// 5. filter() to get even numbers
let numbers3 = [1, 2, 3, 4, 5, 6, 8];
let result3 = numbers3.filter(function(num) {
    return num % 2 === 0;
});
console.log(result3);

// 6. filter() to get ages 18 or above
let ages = [15, 18, 20, 16, 25];
let result4 = ages.filter(function(age) {
    return age >= 18;
});
console.log(result4);

// 7. find() the first number greater than 50
let numbers4 = [10, 30, 60, 80, 100];
let result5 = numbers4.find(function(num) {
    return num > 50;
});
console.log(result5);

// 8. find() the first student whose mark is above 80
let students2 = [
    { name: "Arun", mark: 75 },
    { name: "Dinesh", mark: 90 },
    { name: "Kumar", mark: 85 }
];
let result6 = students2.find(function(student) {
    return student.mark > 80;
});
console.log(result6);

// 9. reduce() to calculate the sum
let numbers5 = [10, 20, 30, 40, 50];
let total1 = numbers5.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log(total1);

// 10. reduce() to calculate the total price
let prices2 = [100, 200, 300, 400];
let total2 = prices2.reduce(function(sum, price) {
    return sum + price;
}, 0);
console.log(total2);

// 11. some() to check whether any number is above 100
let numbers6 = [20, 50, 120, 80];
let result7 = numbers6.some(function(num) {
    return num > 100;
});
console.log(result7);

// 12. every() to check whether all marks are above 35
let marks = [45, 60, 80, 55, 40];
let result8 = marks.every(function(mark) {
    return mark > 35;
});
console.log(result8);


// Sort / Join / Array Conversion — 5 Questions

// 13. Sort numbers in ascending order
let numbers7 = [50, 10, 40, 20, 30];
numbers7.sort(function(a, b) {
    return a - b;
});
console.log(numbers7);

// 14. Sort numbers in descending order
let numbers8 = [50, 10, 40, 20, 30];
numbers8.sort(function(a, b) {
    return b - a;
});
console.log(numbers8);

// 15. Convert student names into a string
let students3 = ["Dinesh", "Arun", "Kumar"];
console.log(students3.toString());

// 16. Combine names using join()
let names = ["Dinesh", "Arun", "Kumar"];
console.log(names.join(" - "));

// 17. Display products separated by commas
let products = ["Laptop", "Mobile", "Keyboard", "Mouse"];
console.log("Available products: " + products.join(", "));


// String Methods — 8 Questions

// 18. charAt() to print the character at index 4
let text1 = "JavaScript";
console.log(text1.charAt(4));

// 19. charCodeAt() of the first character
let text2 = "Hello";
console.log(text2.charCodeAt(0));

// 20. Find the length of a string
let text3 = "Hello JavaScript";
console.log(text3.length);

// 21. slice() to extract JavaScript
let text4 = "JavaScript Developer";
console.log(text4.slice(0, 10));

// 22. Convert lowercase to uppercase
let text5 = "hello javascript";
console.log(text5.toUpperCase());

// 23. Convert uppercase to lowercase
let text6 = "HELLO JAVASCRIPT";
console.log(text6.toLowerCase());

// 24. Remove extra spaces using trim()
let text7 = "   Hello JavaScript   ";
console.log(text7.trim());

// 25. Use prompt(), includes(), indexOf(), startsWith(), endsWith()
let sentence = prompt("Enter a sentence:");
console.log(sentence.includes("JavaScript"));
console.log(sentence.indexOf("JavaScript"));
console.log(sentence.startsWith("Hello"));
console.log(sentence.endsWith("!"));

// Date Methods — 5 Questions

// 26. Print current year, month, date, and day
let today1 = new Date();
console.log("Year:", today1.getFullYear());
console.log("Month:", today1.getMonth() + 1);
console.log("Date:", today1.getDate());
console.log("Day:", today1.getDay());

// 27. Print current hours, minutes, and seconds
let today2 = new Date();
console.log("Hours:", today2.getHours());
console.log("Minutes:", today2.getMinutes());
console.log("Seconds:", today2.getSeconds());

// 28. Change the year using setFullYear()
let date1 = new Date();
date1.setFullYear(2025);
console.log(date1);

// 29. Change the month and date
let date2 = new Date();
date2.setMonth(5);
date2.setDate(15);
console.log(date2);

// 30. Find the day of the week of the user's birth date
let dob = prompt("Enter your date of birth (YYYY-MM-DD):");
let birthDate = new Date(dob + "T12:00:00");

let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

console.log("You were born on:", days[birthDate.getDay()]);
```
