// Ask the user to enter a number
let n = parseInt(prompt("Enter a number:"));

// Display only the entered number in the console
console.log(n);

// Get the table body
let patternTable = document.getElementById("patternTable");

// Create the pattern
for (let i = 1; i <= n; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + j;
    }
     // Display the row in the console
    console.log(row);
    
    // Create a new table row
    let tableRow = document.createElement("tr");

    // Create Row cell
    let rowCell = document.createElement("td");
    rowCell.textContent = i;

    // Create Output cell
    let outputCell = document.createElement("td");
    outputCell.textContent = row;

    // Add cells to the row
    tableRow.appendChild(rowCell);
    tableRow.appendChild(outputCell);

    // Add row to the table
    patternTable.appendChild(tableRow);
}