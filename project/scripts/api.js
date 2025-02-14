const API_BASE_URL = 'https://api.spoonacular.com';
// const API_KEY = '865c3de7d66c4818a10c84a4aba39551';  // Outlook
const API_KEY = 'c45198259d304c1c8d047183c84f83cc';  // Gmail

export async function fetchTopRecipes() {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/random?number=10&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.recipes;
    } catch (error) {
        console.error('Failed to fetch top recipes:', error);
        return [];
    }
}

export async function fetchRandomRecipe(type, time) {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/random?number=1&tags=${type}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.recipes[0];
    } catch (error) {
        console.error('Failed to fetch random recipe:', error);
        return null;
    }
}

export async function searchRecipes(query) {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Failed to search recipes:', error);
        return [];
    }
}

export async function fetchRecipeById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const ingredients = data.extendedIngredients.map(ing => ing.original);
        const instructions = data.analyzedInstructions[0]?.steps.map(step => step.step) || [];
        return { ...data, ingredients, instructions };
    } catch (error) {
        console.error(`Failed to fetch recipe by id ${id}:`, error);
        return null;
    }
}
