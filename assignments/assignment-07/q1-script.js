// Question 1 — Student Search System

// Student class list
const students = ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal'];

// 1. Check whether Ayesha is present in the class
const isAyeshaPresent = students.includes('Ayesha');

console.log("Is Ayesha present?", isAyeshaPresent);


// 2. Find the position of the first occurrence of Sara
const firstSaraPosition = students.indexOf('Sara')+1;

console.log("Position of first Sara:", firstSaraPosition);


// 3. Find the position of the last occurrence of Sara
const lastSaraPosition = students.lastIndexOf('Sara')+1;

console.log("Position of last Sara:", lastSaraPosition);


// 4. Find the first student whose name starts with the letter A
const firstStudentStartingWithA = students.find(student => student.startsWith('A'));

console.log("First student whose name starts with A:", firstStudentStartingWithA);


// 5. Find the position of the first student satisfying that condition
const firstStudentPosition = students.findIndex(student => student.startsWith('A')) + 1;

console.log(
    "Position of first student whose name starts with A:",
    firstStudentPosition
);


// 6. Find the last student satisfying a chosen condition
// Condition: student's name starts with the letter A
const lastStudentStartingWithA = students.findLast(student => student.startsWith('A'));

console.log("Last student whose name starts with A:", lastStudentStartingWithA);


// 7. Determine the position of the last student satisfying that condition
const lastStudentPosition = students.findLastIndex(student => student.startsWith('A'))+1;

console.log("Position of last student whose name starts with A:", lastStudentPosition);