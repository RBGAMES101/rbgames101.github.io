document.addEventListener("DOMContentLoaded", function () {
    fetch("post.yaml")
        .then(response => response.text())
        .then(yamlText => {
            const posts = jsyaml.load(yamlText); // Using js-yaml to parse YAML
            const main = document.querySelector("main");
            main.innerHTML = "";
            posts.forEach(post => {
                const article = document.createElement("article");
                article.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                `;
                main.appendChild(article);
            });
        })
        .catch(error => console.error("Error loading posts:", error));

    // Simulating slow internet for testing
    setTimeout(() => {
        console.log("Simulating slow network conditions...");
    }, 3000);
});
