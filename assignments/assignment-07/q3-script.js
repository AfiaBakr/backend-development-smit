// Question 3 — Class Result Analysis

// Original marks
const marks = [78, 45, 92, 66, 88, 54, 91, 73];

// 1. Create a second array of marks
const secondMarks = [85, 69, 77, 95, 62];

// Combine both groups
const combinedMarks = marks.concat(secondMarks);

console.log("Combined marks:", combinedMarks);


// 2. Create a smaller list containing a selected portion
const selectedMarks = combinedMarks.slice(2, 7);

console.log("Selected portion of marks:", selectedMarks);


// 3. Change one mark in the middle of the list
combinedMarks.splice(5, 1, 80);

console.log("Marks after changing one mark:", combinedMarks);


// 4. Display the total number of marks currently stored
console.log("Total number of marks:", combinedMarks.length);


// 5. Arrange the marks from lowest to highest
const sortedMarks = combinedMarks.sort((a, b) => a - b);

console.log("Marks from lowest to highest:", sortedMarks);


// 6. Reverse the order for another report
const reversedMarks = sortedMarks.reverse();

console.log("Marks from highest to lowest:", reversedMarks);


// 7. Arrow function that receives the marks array
const displayFinalResult = (marksArray) => {
    console.log("Final result:", marksArray);
};

// Call the arrow function
displayFinalResult(reversedMarks);