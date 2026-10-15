// Question 3 - Manage Class Lists and Student Profiles
// Group A
const groupA = ["Ali", "Ahmed", "Hamza"];
console.log("Original Group A:", groupA);

// Group B
const groupB = ["Sara", "Ayesha", "Laiba"];
console.log("Original Group B:", groupB);

// Profile
const profile = {
    name: "Laiba",
    className: "Web Development",
    city: "Karachi"
};
console.log("Original Profile:", profile);

// Combine both groups
const classList = [...groupA, ...groupB];
console.log("Combined Class List:", classList);

// Copy Group A and add a new student
const updatedGroupA = [...groupA, "Usman"];
console.log("Updated Group A:", updatedGroupA);

// Update Laiba's city
const updatedProfile = { ...profile, city: "Lahore" };
console.log("Updated Profile:", updatedProfile);

// Add email to another updated profile
const profileWithEmail = {
    ...profile,
    email: "laiba@example.com"
};
console.log("Profile with Email:", profileWithEmail);
