const STORAGE_KEY = 'savedRecipes';

export function saveRecipe(recipe) {
    let savedRecipes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    if (!savedRecipes.some(r => r.id === recipe.id)) {
        savedRecipes.push(recipe);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedRecipes));
    }
}

export function removeRecipe(recipeId) {
    let savedRecipes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    savedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedRecipes));
}

export function removeRecipeById(recipeId) {
    let savedRecipes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const updatedRecipes = savedRecipes.filter(recipe => recipe.id !== recipeId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecipes));
}

export function getSavedRecipes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
