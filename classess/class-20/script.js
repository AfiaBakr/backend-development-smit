// Callback Hell
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);

// Promises
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
console.log(myPromise);

const myPromise1 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
console.log(myPromise1);



const myPromise3 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Step 1");
    } else {
        reject("Step 2");
    }
});
myPromise3
    .then(result => console.log(result))
    .catch(error => console.log(error))

// 5. Promise with a Timer
function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Student data received!"), 2000);
    });
}
getData().then(data => console.log(data));
console.log("Request started...");

// 2. Using Promises
// Ab hum same task ko Promises aur .then() ke through perform karte hain.
function getData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data", id, "received");
            resolve();
        }, 1000);
    });
}

function getAllData() {
    console.log("Getting data 1...");

    getData(1)
        .then(() => {
            console.log("Getting data 2...");
            return getData(2);
        })
        .then(() => {
            console.log("Getting data 3...");
            return getData(3);
        })
        .then(() => {
            console.log("All data received!");
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

getAllData();
// Output
// Getting data 1...
// Data 1 received
// Getting data 2...
// Data 2 received
// Getting data 3...
// Data 3 received
// All data received!

// 6. Promise Chaining
// Promises allow multiple operations to be performed in sequence. Returning a value from .then() makes it available to the next .then(). Returning a Promise makes the chain wait for it to settle.
Promise.resolve(5)
    .then(number => number * 2)
    .then(result => result + 10)
    .then(finalResult => console.log(finalResult));

// Q1. Student Data Loading
// A school website ko sequentially 3 students ka data load karna hai.

// getStudentData(id) function banao.
// Har student ka data load hone mein 2 seconds lagne chahiye.
// Pehle Student 1, phir Student 2, aur phir Student 3 ka data load karo.
// Har student ka data load hone par uski ID print karo.
// Last mein "All students loaded!" print karo.


function getStudentData(id, callback) {
    setTimeout(() => {
        console.log("Student ID:", id);
        callback();
    }, 2000);
}

getStudentData(1, () => {
    getStudentData(2, () => {
        getStudentData(3, () => {
            console.log("All students loaded!");
        });
    });
});



function getStudentData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                console.log("Student ID:", id);
                resolve();
            } else {
                reject("Invalid Student ID: " + id);
            }
        }, 2000);
    });
}

getStudentData(1)
    .then(() => getStudentData(2))
    .then(() => getStudentData(3))
    .then(() => {
        console.log("All students loaded!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });
// 3. Using await
function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data received!"), 2000);
    });
}
async function showData() {
    console.log("Loading...");
    const result = await getData();
    console.log(result);
}
showData();
// Output:
// Loading...
// Data received!





