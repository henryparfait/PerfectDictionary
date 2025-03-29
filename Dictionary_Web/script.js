document.getElementById("searchBtn").addEventListener("click", function() {
    const word = document.getElementById("word").value.trim();  

    // Check if the input field is empty
    if (word === "") {
        alert("Please enter a word!");
        return;
    }

    // URL to fetch data from API
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    // Fetch the definition from the API
    fetch(apiUrl)
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            // If the word is not found
            if (data.title === "No Definitions Found") {
                document.getElementById("answer").innerHTML = "Word not found. Please try another.";
            } else {
                // Get the first definition
                const definition = data[0].meanings[0].definitions[0].definition;
                document.getElementById("answer").innerHTML = `
                    <h3>Definition of "${word}"</h3>
                    <p>${definition}</p>
                `;
            }
        })
        .catch(error => {
            // Handle any error (e.g., network issues)
            document.getElementById("answer").innerHTML = "Error fetching data. Please try again.";
        });
});
