// Question 2: Order Processing Sequence

// Version 1: Nested Callbacks

function prepareOrder(callback) {
  console.log("In Nested Callbacks - Preparation started...");

  setTimeout(function () {
    console.log("In Nested Callbacks - Preparation finished.");

    callback();
  }, 1000);
}

function packOrder(callback) {
  console.log("In Nested Callbacks - Packing started...");

  setTimeout(function () {
    console.log("In Nested Callbacks - Packing finished.");

    callback();
  }, 1000);
}

function notifyCustomer() {
  console.log("In Nested Callbacks - Customer notification started...");

  setTimeout(function () {
    console.log("In Nested Callbacks - Customer notified. Order completed!");
  }, 1000);
}

prepareOrder(function () {
  packOrder(function () {
    notifyCustomer();
  });
});


 // Version 2: Promise-Based Approach

function prepareOrderPromise() {
  return new Promise(function (resolve) {
    console.log("In Promise-Based Approach - Preparation started...");

    setTimeout(function () {
      console.log("In Promise-Based Approach - Preparation finished.");
      resolve();
    }, 2000);
  });
}

function packOrderPromise() {
  return new Promise(function (resolve) {
    console.log("In Promise-Based Approach - Packing started...");

    setTimeout(function () {
      console.log("In Promise-Based Approach - Packing finished.");
      resolve();
    }, 2000);
  });
}

function notifyCustomerPromise() {
  return new Promise(function (resolve) {
    console.log("In Promise-Based Approach - Customer notification started...");

    setTimeout(function () {
      console.log("In Promise-Based Approach - Customer notified. Order completed!");
      resolve();
    }, 2000);
  });
}

async function processOrder() {

  await prepareOrderPromise();
  await packOrderPromise();
  await notifyCustomerPromise();
}

processOrder();

// Comparison:
// Nested callbacks can become deeply nested and difficult to read.
// Promises with async/await make the sequence cleaner and easier to understand.