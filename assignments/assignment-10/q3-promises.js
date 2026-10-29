// Question 3: Event Registration Promise

function registerStudent(studentName, seatAvailable) {
  return new Promise(function (resolve, reject) {
    if (seatAvailable) {
      resolve(studentName + " registered successfully!");
    } else {
      reject(studentName + " registration failed. The class is full.");
    }
  });
}

// Test Case 1: Seat Available
registerStudent("Ali", true)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });

// Test Case 2: No Seat Available
registerStudent("Ahmed", false)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });