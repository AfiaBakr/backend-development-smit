// Student Performance Analyzer

const studentMarks = [45, 78, 92, 61, 88, 54, 73, 95]
console.log("Original studentMarks:", studentMarks);

// 1. Increase every mark by 5
const practicestudentMarks = studentMarks.map(mark => mark + 5);
console.log("Practice studentMarks (+5):", practicestudentMarks);

// 2. Get studentMarks that are 70 or above
const passedstudentMarks = studentMarks.filter(mark => mark >= 70);
console.log("studentMarks 70 or Above:", passedstudentMarks);

// 3. Find the first mark greater than 90
const firstHighMark = studentMarks.find(mark => mark > 90);
console.log("First Mark Greater Than 90:", firstHighMark);

// 4. Calculate the total of all original studentMarks
const totalstudentMarks = studentMarks.reduce((total, mark) => total + mark, 0);
console.log("Total Original studentMarks:", totalstudentMarks);

