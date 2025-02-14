import { fetchRecipeById } from './api.js';
import { renderRecipeModal } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    const recipe = await fetchRecipeById(recipeId);
    const recipeDetails = document.getElementById('recipe-details');
    renderRecipeModal(recipe, recipeDetails);
});
