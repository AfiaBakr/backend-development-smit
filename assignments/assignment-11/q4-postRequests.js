const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Get HTML elements
const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const userIdInput = document.getElementById("userId");
const contentInput = document.getElementById("content");
const responseOutput = document.getElementById("responseOutput");
const statusMessage = document.getElementById("statusMessage");

const putBtn = document.getElementById("putBtn");
const patchBtn = document.getElementById("patchBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Reusable API request helper
async function makeRequest(url, method, body = null) {
    const options = {
        method: method,
        headers: {}
    };

    // JSON.stringify() converts a JavaScript object into a JSON string.
    // Content-Type tells the API that the request body contains JSON data.
    if (body !== null) {
        options.headers["Content-Type"] = "application/json; charset=UTF-8";
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    // JSONPlaceholder returns JSON for these operations.
    const data = await response.json();

    return {
        status: response.status,
        ok: response.ok,
        data: data
    };
}

// Display API response
function displayResponse(result, operation) {
    statusMessage.textContent =
        `${operation} completed. HTTP Status: ${result.status}`;

    statusMessage.className = result.ok
        ? "status-message success"
        : "status-message error";

    responseOutput.textContent = JSON.stringify(
        {
            operation: operation,
            statusCode: result.status,
            success: result.ok,
            returnedID: result.data.id ?? null,
            response: result.data
        },
        null,
        2
    );
}

// Handle errors
function displayError(error) {
    statusMessage.textContent = `Error: ${error.message}`;
    statusMessage.className = "status-message error";
    responseOutput.textContent = error.stack || error.message;
}

// Disable buttons while a request is running
async function runOperation(button, operation) {
    button.disabled = true;

    try {
        await operation();
    } catch (error) {
        displayError(error);
    } finally {
        button.disabled = false;
    }
}

// 1. POST: Create a new post
postForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    await runOperation(postForm.querySelector('button[type="submit"]'), async function () {
        const post = {
            title: titleInput.value.trim(),
            body: contentInput.value.trim(),
            userId: Number(userIdInput.value)
        };

        if (!post.title || !post.body || !Number.isInteger(post.userId) || post.userId < 1) {
            throw new Error("Please enter a title, content, and a valid positive user ID.");
        }

        const result = await makeRequest(API_URL, "POST", post);

        displayResponse(result, "POST - Create Post");

        if (result.ok) {
            postForm.reset();
        }
    });
});

// 2. PUT: Replace the complete post representation
putBtn.addEventListener("click", async function () {
    await runOperation(putBtn, async function () {
        const completePost = {
            id: 1,
            title: "Updated Announcement",
            body: "This is the complete replacement post content.",
            userId: 1
        };

        const result = await makeRequest(
            `${API_URL}/1`,
            "PUT",
            completePost
        );

        displayResponse(result, "PUT - Replace Post");
    });
});

// 3. PATCH: Update only the title
patchBtn.addEventListener("click", async function () {
    await runOperation(patchBtn, async function () {
        const partialPost = {
            title: "Title Updated Using PATCH"
        };

        const result = await makeRequest(
            `${API_URL}/1`,
            "PATCH",
            partialPost
        );

        displayResponse(result, "PATCH - Update Title");
    });
});

// 4. DELETE: Delete post ID 1
deleteBtn.addEventListener("click", async function () {
    await runOperation(deleteBtn, async function () {
        const result = await makeRequest(
            `${API_URL}/1`,
            "DELETE"
        );

        displayResponse(result, "DELETE - Delete Post");
    });
});