// Garden Advice Program
// Gives gardening tips based on the season and the type of plant.

// Hardcoded values for the season and plant type
let season = "summer"; // TODO: Replace with prompt() to allow user interaction.
let plantType = "flower"; // TODO: Replace with prompt() to allow user interaction.

// Returns advice for the season that is passed in
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

// Returns advice for the plant type that is passed in
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// Joins the season advice and the plant advice into one message
function getAdvice(season, plantType) {
    return getSeasonAdvice(season) + getPlantAdvice(plantType);
}

// Log the generated advice to the console
console.log(getAdvice(season, plantType));

// TODO: Examples of possible features to add:
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
