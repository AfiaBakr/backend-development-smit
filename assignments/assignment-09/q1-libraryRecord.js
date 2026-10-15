// Question 1 - Library Book Record

const bookRecord = ["BK-104", "JavaScript for Beginners", "Programming", 1200];
console.log(`Orignal Array : ${bookRecord}`)
// Extract book details and ignore the category
const [bookId, bookTitle, , price] = bookRecord;
console.log(`Book ID: ${bookId}, Title: ${bookTitle}, Price: ${price}`);

// Shorter book record
const shortRecord = ["BK-105", "Learning ES6"];

// Assign default category
const [, , category = "General"] = shortRecord;
console.log(`Book ID: ${shortRecord[0]}, Title: ${shortRecord[1]}, Category: ${category}`);