document.getElementById("output5").innerHTML = "Question 5: Menu Selection Using switch Statement";


let choice = parseInt(prompt("Please select an option:\n1. Home\n2. About\n3. Services\n4. Contact"));

switch (choice) {
    case 1:
        console.log("You selected Home");
        break;

    case 2:
        console.log("You selected About");
        break;

    case 3:
        console.log("You selected Services");
        break;

    case 4:
        console.log("You selected Contact");
        break;

    default:
        console.log("Invalid Choice");
}