// Question 6: Mini Project - Support Ticket Status Checker

// Sample Ticket Data
const tickets = [
    {
        id: "101",
        customerName: "Ali Ahmed",
        status: "Open"
    },
    {
        id: "102",
        customerName: "Sara Khan",
        status: "In Progress"
    },
    {
        id: "103",
        customerName: "Ahmed Raza",
        status: "Resolved"
    }
];

// Function returns a Promise after 2 seconds
function getTicket(ticketId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ticket = tickets.find(
                (ticket) => ticket.id === ticketId
            );

            if (ticket) {
                resolve(ticket);
            } else {
                reject(new Error("Ticket ID not found. Please enter a valid ID."));
            }
        }, 2000);
    });
}

// Async function to check ticket status
async function checkTicket() {
    const ticketId = document
        .getElementById("ticketId")
        .value.trim();

    const result = document.getElementById("result");
    const checkBtn = document.getElementById("checkBtn");

    if (ticketId === "") {
        result.className = "error";
        result.textContent = "Please enter a ticket ID.";
        return;
    }

    // Display loading message
    result.className = "loading";
    result.textContent = "Loading... Please wait 2 seconds.";

    checkBtn.disabled = true;

    try {
        // Wait for the Promise to resolve
        const ticket = await getTicket(ticketId);

        result.className = "success";
        result.innerHTML = `
            <h3>Ticket Found!</h3>
            <p><strong>Ticket ID:</strong> ${ticket.id}</p>
            <p><strong>Customer:</strong> ${ticket.customerName}</p>
            <p><strong>Status:</strong> ${ticket.status}</p>
        `;
    } catch (error) {
        // Handle rejected Promise
        result.className = "error";
        result.textContent = error.message;
    } finally {
        // Enable button whether successful or not
        checkBtn.disabled = false;
    }
}
