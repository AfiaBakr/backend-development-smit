
// Fetch API CRUD Practice
// GET, POST, PUT, PATCH, DELETE


const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Store posts in local page state
let posts = [];

// Select HTML elements
const postForm = document.getElementById("postForm");
const postTitle = document.getElementById("postTitle");
const userId = document.getElementById("userId");
const postBody = document.getElementById("postBody");
const postsContainer = document.getElementById("postsContainer");
const message = document.getElementById("message");
const postCount = document.getElementById("postCount");
const reloadBtn = document.getElementById("reloadBtn");
const submitBtn = postForm.querySelector('button[type="submit"]');



// Show success, error, or loading messages


function showMessage(text, type = "success") {
    message.textContent = text;
    message.className = "message";

    if (type === "error") {
        message.classList.add("error");
    } else if (type === "loading") {
        message.classList.add("loading");
    }
}



// Handle HTTP responses and errors


async function sendRequest(url, options = {}) {
    const response = await fetch(url, options);

    // Log the HTTP response status
    console.log(
        `${options.method || "GET"} ${url} - Status: ${response.status}`
    );

    // Handle unsuccessful HTTP responses
    if (!response.ok) {
        throw new Error(
            `Request failed: ${response.status} ${response.statusText}`
        );
    }

    // Some successful responses, such as DELETE, have no response body
    if (response.status === 204) {
        return null;
    }

    return await response.json();
}



// Create a button safely


function createButton(text, className, action) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = text;
    button.className = `btn ${className}`;
    button.dataset.action = action;

    return button;
}



// Render posts on the webpage


function renderPosts() {
    postsContainer.replaceChildren();

    postCount.textContent =
        `${posts.length} post${posts.length === 1 ? "" : "s"} shown`;

    if (posts.length === 0) {
        const empty = document.createElement("p");

        empty.className = "empty-state";
        empty.textContent = "No posts available.";

        postsContainer.appendChild(empty);
        return;
    }

    posts.forEach((post) => {
        // Create the post card
        const card = document.createElement("article");
        card.className = "post-card";

        // Post ID and user ID
        const meta = document.createElement("div");
        meta.className = "post-meta";
        meta.textContent = `Post ID: ${post.id} · User ID: ${post.userId}`;

        // Post title
        const title = document.createElement("h3");
        title.className = "post-title";
        title.textContent = post.title;

        // Post body
        const body = document.createElement("p");
        body.className = "post-body";
        body.textContent = post.body;

        // Action buttons
        const actions = document.createElement("div");
        actions.className = "post-actions";

        const putButton = createButton(
            "PUT full update",
            "btn-put",
            "put"
        );

        const patchTitleButton = createButton(
            "PATCH title",
            "btn-patch",
            "patch-title"
        );

        const patchBodyButton = createButton(
            "PATCH body",
            "btn-patch",
            "patch-body"
        );

        const deleteButton = createButton(
            "DELETE",
            "btn-delete",
            "delete"
        );

        // Store the post ID on every action button
        [
            putButton,
            patchTitleButton,
            patchBodyButton,
            deleteButton
        ].forEach((button) => {
            button.dataset.id = post.id;
            actions.appendChild(button);
        });

        // Add everything to the card
        card.append(meta, title, body, actions);

        postsContainer.appendChild(card);
    });
}



// GET: Load the first six posts


async function loadPosts() {
    reloadBtn.disabled = true;

    showMessage("Loading posts...", "loading");

    try {
        const data = await sendRequest(`${API_URL}?_limit=6`);

        posts = data;

        renderPosts();

        showMessage(
            `GET successful! Posts loaded. Check the console for response status 200.`
        );
    } catch (error) {
        console.error("GET error:", error);

        showMessage(
            `Error loading posts: ${error.message}. Please try again.`,
            "error"
        );
    } finally {
        reloadBtn.disabled = false;
    }
}



// POST: Add a new post


postForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = postTitle.value.trim();
    const body = postBody.value.trim();
    const id = Number(userId.value);

    // Validate form data
    if (!title || !body || !Number.isInteger(id) || id < 1) {
        showMessage(
            "Please enter a title, content, and a valid user ID.",
            "error"
        );
        return;
    }

    submitBtn.disabled = true;
    showMessage("Adding your post...", "loading");

    try {
        const newPost = {
            title: title,
            body: body,
            userId: id
        };

        const data = await sendRequest(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newPost)
        });

        // Add the returned example response to local page state.
        // JSONPlaceholder does not permanently save the new post.
        posts.unshift(data);

        renderPosts();

        postForm.reset();
        userId.value = "1";

        showMessage(
            `POST successful! New post added locally. Response status: 201.`
        );
    } catch (error) {
        console.error("POST error:", error);

        showMessage(
            `Error adding post: ${error.message}`,
            "error"
        );
    } finally {
        submitBtn.disabled = false;
    }
});



// PUT: Replace the full post


async function updatePost(postId) {
    const post = posts.find((item) => item.id === postId);

    if (!post) {
        showMessage("Post not found.", "error");
        return;
    }

    // Ask the user for the complete updated post
    const title = prompt("Enter the new post title:", post.title);

    if (title === null) return;

    const body = prompt("Enter the new post content:", post.body);

    if (body === null) return;

    const newUserId = prompt("Enter the new user ID:", post.userId);

    if (newUserId === null) return;

    if (
        !title.trim() ||
        !body.trim() ||
        !Number.isInteger(Number(newUserId)) ||
        Number(newUserId) < 1
    ) {
        showMessage(
            "Title, content, and a valid user ID are required.",
            "error"
        );
        return;
    }

    showMessage("Updating the complete post using PUT...", "loading");

    try {
        // PUT sends the complete post representation
        const updatedPost = {
            id: postId,
            title: title.trim(),
            body: body.trim(),
            userId: Number(newUserId)
        };

        const data = await sendRequest(`${API_URL}/${postId}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(updatedPost)
        });

        // Update the local display
        posts = posts.map((item) =>
            item.id === postId ? data : item
        );

        renderPosts();

        showMessage(
            `PUT successful! Post ${postId} updated locally.`
        );
    } catch (error) {
        console.error("PUT error:", error);

        showMessage(
            `Error updating post: ${error.message}`,
            "error"
        );
    }
}



// PATCH: Update only the title or body


async function patchPost(postId, field) {
    const post = posts.find((item) => item.id === postId);

    if (!post) {
        showMessage("Post not found.", "error");
        return;
    }

    // Select the field to update
    const fieldName = field === "title" ? "title" : "body";

    const newValue = prompt(
        `Enter the new post ${fieldName}:`,
        post[fieldName]
    );

    if (newValue === null) return;

    if (!newValue.trim()) {
        showMessage(
            `The post ${fieldName} cannot be empty.`,
            "error"
        );
        return;
    }

    showMessage(
        `Updating only the ${fieldName} using PATCH...`,
        "loading"
    );

    try {
        // PATCH sends only the changed property
        const patchData = {
            [fieldName]: newValue.trim()
        };

        const data = await sendRequest(`${API_URL}/${postId}`, {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(patchData)
        });

        // Preserve unchanged properties in local page state
        posts = posts.map((item) =>
            item.id === postId
                ? { ...item, ...data }
                : item
        );

        renderPosts();

        showMessage(
            `PATCH successful! Post ${postId} ${fieldName} updated locally.`
        );
    } catch (error) {
        console.error("PATCH error:", error);

        showMessage(
            `Error updating post: ${error.message}`,
            "error"
        );
    }
}



// DELETE: Delete a post


async function deletePost(postId) {
    const confirmed = confirm(
        `Are you sure you want to delete post ${postId}?`
    );

    if (!confirmed) return;

    showMessage("Deleting post...", "loading");

    try {
        await sendRequest(`${API_URL}/${postId}`, {
            method: "DELETE"
        });

        // Remove the post from local page state
        posts = posts.filter((item) => item.id !== postId);

        renderPosts();

        showMessage(
            `DELETE successful! Post ${postId} removed locally.`
        );
    } catch (error) {
        console.error("DELETE error:", error);

        showMessage(
            `Error deleting post: ${error.message}`,
            "error"
        );
    }
}

// Handle all post card buttons

postsContainer.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const postId = Number(button.dataset.id);
    const action = button.dataset.action;

    // Prevent accidental double-click requests
    if (button.disabled) return;

    button.disabled = true;

    try {
        if (action === "put") {
            await updatePost(postId);
        } else if (action === "patch-title") {
            await patchPost(postId, "title");
        } else if (action === "patch-body") {
            await patchPost(postId, "body");
        } else if (action === "delete") {
            await deletePost(postId);
        }
    } finally {
        button.disabled = false;
    }
});

// Reload button: GET posts again

reloadBtn.addEventListener("click", loadPosts);


// Load posts when the page opens

loadPosts();