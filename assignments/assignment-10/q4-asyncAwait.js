// Question 4: Load Student Records in Sequence

function getStudentData(id) {
  return new Promise(function (resolve, reject) {
    console.log("Loading Student " + id + "...");

    setTimeout(function () {
      if (id >= 1 && id <= 3) {
        let student = {
          id: id,
          name: "Student " + id,
          course: "Web Development"
        };

        resolve(student);
      } else {
        reject("Error: Student data not found!");
      }
    }, 2000);
  });
}

async function loadStudents() {
  try {
    let student1 = await getStudentData(1);
    console.log("Student Data:", student1);

    let student2 = await getStudentData(2);
    console.log("Student Data:", student2);

    let student3 = await getStudentData(3);
    console.log("Student Data:", student3);

  } catch (error) {
    console.log(error);
  }
}

loadStudents();

// Explanation:
// await pauses the current async function until the Promise settles.
// It does not freeze the whole JavaScript program because other tasks
// can continue running while the Promise is pending.