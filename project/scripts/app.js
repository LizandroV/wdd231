import { fetchTopRecipes, fetchRandomRecipe, searchRecipes, fetchRecipeById } from './api.js';
import { renderRecipes, renderRecipeModal } from './ui.js';
import { saveRecipe, getSavedRecipes, removeRecipe } from './storage.js';

document.addEventListener('DOMContentLoaded', async () => {
    const path = window.location.pathname;
    const container = document.getElementById('recipes-container') || document.getElementById('search-results') || document.getElementById('random-recipe') || document.getElementById('saved-recipes');
    const modal = document.getElementById('recipe-modal');
    const span = document.getElementsByClassName('close')[0];

    if (path.includes('index.html')) {
        const recipes = await fetchTopRecipes();
        if (recipes.length === 0) {
            container.innerHTML = '<p>No recipes found. Please try again later.</p>';
        } else {
            renderRecipes(recipes, container, 'index');
        }
    } else if (path.includes('random.html')) {
        document.getElementById('random-button').addEventListener('click', async () => {
            const type = document.getElementById('meal-type').value;
            const time = document.getElementById('prep-time').value;
            const recipe = await fetchRandomRecipe(type, time);
            if (!recipe) {
                container.innerHTML = '<p>No recipe found. Please try again later.</p>';
            } else {
                renderRecipes([recipe], container, 'random');
            }
        });
    } else if (path.includes('search.html')) {
        document.getElementById('search-button').addEventListener('click', async () => {
            const query = document.getElementById('search-input').value;
            const recipes = await searchRecipes(query);
            if (recipes.length === 0) {
                container.innerHTML = '<p>No recipes found. Please try a different search.</p>';
            } else {
                renderRecipes(recipes, container, 'search');
            }
        });
    } else if (path.includes('saved.html')) {
        const savedRecipes = getSavedRecipes();
        if (savedRecipes.length === 0) {
            container.innerHTML = '<p>No saved recipes. Save some recipes to view them here.</p>';
        } else {
            renderRecipes(savedRecipes, container, 'saved');
        }

        container.addEventListener('click', async (e) => {
            if (e.target.classList.contains('remove-recipe')) {
                const recipeId = e.target.getAttribute('data-id');
                removeRecipe(recipeId);
                e.target.closest('.recipe-card').remove();
            } else if (e.target.classList.contains('open-recipe')) {
                const recipeId = e.target.getAttribute('data-id');
                const recipe = await fetchRecipeById(recipeId);
                if (recipe) {
                    if (window.innerWidth <= 600) {
                        window.open(`recipe.html?id=${recipe.id}`, '_blank');
                    } else {
                        renderRecipeModal(recipe);
                        modal.style.display = 'block';
                    }
                }
            }
        });
    }

    container.addEventListener('click', async (e) => {
        if (e.target.classList.contains('save-recipe')) {
            const recipeId = e.target.getAttribute('data-id');
            const recipe = await fetchRecipeById(recipeId);
            if (recipe) {
                saveRecipe(recipe);
            }
        } else if (e.target.classList.contains('save-recipe-modal')) {
            const recipeId = e.target.getAttribute('data-id');
            const recipe = await fetchRecipeById(recipeId);
            if (recipe) {
                saveRecipe(recipe);
            }
        } else if (e.target.classList.contains('open-recipe')) {
            const recipeId = e.target.getAttribute('data-id');
            const recipe = await fetchRecipeById(recipeId);
            if (recipe) {
                if (window.innerWidth <= 600) {
                    window.open(`recipe.html?id=${recipe.id}`, '_blank');
                } else {
                    renderRecipeModal(recipe);
                    modal.style.display = 'block';
                }
            }
        }
    });

    span.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
