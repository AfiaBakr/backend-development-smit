
const recipesContainer = document.getElementById("recipes-container");
const message = document.getElementById("message");
const status = document.getElementById("status");

const recipeDetails = document.getElementById("recipe-details");
const detailsTitle = document.getElementById("details-title");
const ingredientsList = document.getElementById("ingredients-list");

// Function to fetch and display recipes
async function getRecipes() {
    // Show loading message
    message.textContent = "Loading recipes...";
    status.textContent = "Waiting for API response...";

    try {
        // Send GET request to the API
        const response = await fetch("https://dummyjson.com/recipes");

        // Display HTTP status code
        console.log("HTTP Status Code:", response.status);
        status.textContent = "HTTP Status Code: " + response.status;

        // Check whether the response was successful
        if (!response.ok) {
            throw new Error("Failed to fetch recipes. Please try again.");
        }

        // Convert response body to JSON
        const data = await response.json();

        // Access the recipes array
        const recipes = data.recipes;

        // Clear loading message
        message.textContent = "";

        // Check if recipes are available
        if (!recipes || recipes.length === 0) {
            message.textContent = "No recipes found.";
            return;
        }

        // Display at least six recipes
        recipes.slice(0, 6).forEach((recipe) => {

            // Create recipe card
            const card = document.createElement("div");
            card.className = "recipe-card";

            // Create recipe image
            const image = document.createElement("img");
            image.src = recipe.image || "";
            image.alt = recipe.name;

            // Hide image if unavailable
            if (!recipe.image) {
                image.style.display = "none";
            }

            // Create recipe information container
            const info = document.createElement("div");
            info.className = "recipe-info";

            // Recipe name
            const title = document.createElement("h3");
            title.textContent = recipe.name;

            // Cuisine
            const cuisine = document.createElement("p");
            cuisine.textContent = "Cuisine: " + (recipe.cuisine || "Not available");

            // Preparation time
            const prepTime = document.createElement("p");
            prepTime.textContent =
                "Preparation Time: " +
                (recipe.prepTimeMinutes !== undefined
                    ? recipe.prepTimeMinutes + " minutes"
                    : "Not available");

            // Details button
            const button = document.createElement("button");
            button.className = "details-btn";
            button.textContent = "View Ingredients";

            // Show ingredients when button is clicked
            button.addEventListener("click", () => {
                showIngredients(recipe);
            });

            // Add elements to the recipe card
            info.appendChild(title);
            info.appendChild(cuisine);
            info.appendChild(prepTime);
            info.appendChild(button);

            card.appendChild(image);
            card.appendChild(info);

            // Add card to the webpage
            recipesContainer.appendChild(card);
        });

    } catch (error) {
        // Log error in console
        console.error("Error fetching recipes:", error.message);

        // Show helpful error message
        message.textContent =
            "Unable to load recipes. Please check your internet connection and try again.";

        message.style.color = "red";
        status.textContent = "Request failed.";
    }
}

// Function to display selected recipe ingredients
function showIngredients(recipe) {
    // Clear previous ingredients
    ingredientsList.innerHTML = "";

    // Update recipe title
    detailsTitle.textContent = recipe.name + " - Ingredients";

    // Get ingredients array
    const ingredients = recipe.ingredients || [];

    if (ingredients.length === 0) {
        const item = document.createElement("li");
        item.textContent = "Ingredients are not available.";
        ingredientsList.appendChild(item);
    } else {
        // Display each ingredient as a list item
        ingredients.forEach((ingredient) => {
            const item = document.createElement("li");
            item.textContent = ingredient;
            ingredientsList.appendChild(item);
        });
    }

    // Make the details section visible
    recipeDetails.style.display = "block";

    // Scroll to the ingredients section
    recipeDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// Run the function
getRecipes();
