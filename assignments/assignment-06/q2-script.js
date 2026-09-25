const students =["Hina", "Uzma", "Hira", "Rida", "Gull"];
console.log(students)
// to add a student to the end
students.push("Sundas");
console.log(students);

// to remove the last student and display the removed value
console.log("Remove last student name: ",students.pop());
console.log(students);

// to add a student to the beginning
students.unshift("Nosheen");
console.log(students);

// to remove the first student and display the remoed value
console.log("Remove first student name: ",students.shift());
console.log(students);

// to display the final number of students
console.log("Total lenght of student: ",students.length);