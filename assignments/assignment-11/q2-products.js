
const productsContainer = document.getElementById("products-container");
const message = document.getElementById("message");

// GET request to fetch products
fetch("https://dummyjson.com/products")

    .then((response) => {
        // Display the HTTP response status code
        console.log("Response Status:", response.status);

        // Check whether the response was successful
        if (!response.ok) {
            throw new Error("Failed to fetch products. Please try again.");
        }

        // Convert response body to JSON
        return response.json();
    })

    .then((data) => {
        // Access the products array
        const products = data.products;

        // Log the brand of the first product
        console.log("First Product Brand:", products[0].brand);

        // Hide the loading message
        message.textContent = "";

        // Check if products are available
        if (products.length === 0) {
            message.textContent = "No products found.";
            return;
        }

        // Display at least six products
        products.slice(0, 6).forEach((product) => {

            // Create a product card
            const card = document.createElement("div");
            card.className = "product-card";

            // Create the product image
            const image = document.createElement("img");
            image.src = product.thumbnail || "";
            image.alt = product.title;

            // Hide the image if no thumbnail is available
            if (!product.thumbnail) {
                image.style.display = "none";
            }

            // Create the product title
            const title = document.createElement("h3");
            title.textContent = product.title;

            // Create the brand
            const brand = document.createElement("p");
            brand.textContent = "Brand: " + (product.brand || "Not available");

            // Create the price
            const price = document.createElement("p");
            price.className = "price";
            price.textContent = "$" + product.price;

            // Add elements to the card
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(brand);
            card.appendChild(price);

            // Add card to the webpage
            productsContainer.appendChild(card);
        });
    })

    .catch((error) => {
        // Handle errors
        console.error("Error:", error.message);

        // Display an error message
        message.textContent = "Unable to load products. Please check your internet connection and try again.";
        message.style.color = "red";
    });
