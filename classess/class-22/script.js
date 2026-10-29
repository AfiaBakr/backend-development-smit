// 5. Sending data: POST requests

const createPost = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Hello", userId: 1,body:"kdjj"}),
  });
  let data = await response.json();
  console.log(response.status, data); // 201 { id: 101, ... }
};
createPost()
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#successful_responses

const createComments = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Hello", userId: 1,body:"kdjj", email: "abc@gmail.com"}),
  });
  let data = await response.json();
  console.log(response.status, data); // 201 { id: 101, ... }
};
createComments()

const createUsers = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Afia",body:"Hello", userId: 1, email: "abc@gmail.com"}),
  });
  let data = await response.json();
  console.log(response.status, data); // 201 { id: 101, ... }
};
createUsers()

const createPatchPatch = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Sirf title change hua" }),
  });
  let data = await response.json();
  console.log(response.status, data); // 201 { id: 101, ... }
};
createPatchPatch()

const createPatchPut = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Updated body",
        userId: 1,
  }),
});
let data = await response.json();
  console.log(response.status, data); // 201 { id: 101, ... }
};
createPatchPut()

// https://dummyjson.com

const createPatchPatch1 = async () => {
  let response = await fetch("https://dummyjson.com/posts/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Sirf title change hua" }),
  });
  let data = await response.json();
  console.log(response.status, data); // 201 { id: 101, ... }
};
createPatchPatch1()

const createPatchPut1 = async () => {
  let response = await fetch("https://dummyjson.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "Updated body",
        userId: 1,
  }),
});

let data = await response.json();
  console.log(response.status, data); // 201 { id: 101, ... }
};
createPatchPut1()

// delete
const createDelete = async () => {
  let response = await fetch("https://dummyjson.com/posts/1", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    
});

let data = await response.json();
  console.log(response.status, data); // 201 { id: 101, ... }
};
createDelete()

// https://dummyjson.com/todos/1(DELETE)



