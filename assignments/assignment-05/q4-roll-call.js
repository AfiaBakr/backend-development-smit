let totalCalled = 0;

for (let rollNumber = 1; rollNumber <= 20; rollNumber++) {

    // Skip roll number 13
    if (rollNumber === 13) {
        continue;
    }

    // Stop the loop when roll number reaches 18
    if (rollNumber === 18) {
        break;
    }

    // Call the roll number
    console.log("Calling roll number " + rollNumber);
    
    // Count the roll number
    totalCalled++;
}

// Display total number of roll numbers called
console.log("Total roll numbers called = " + totalCalled);
document.getElementById("rollcall").innerHTML= "Total roll numbers called = " + totalCalled;