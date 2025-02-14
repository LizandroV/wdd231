export function renderRecipes(recipes, container, page) {
    container.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        let buttons = `
            <button class="button open-recipe" data-id="${recipe.id}">View Recipe</button>
        `;

        if (page !== 'saved') {
            buttons += `<button class="button save-recipe" data-id="${recipe.id}">Save</button>`;
        }

        if (page === 'saved') {
            buttons += `<button class="button remove-recipe" data-id="${recipe.id}">Remove</button>`;
        }

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="card-content">
                <h2>${recipe.title}</h2>
                ${buttons}
            </div>
        `;
        container.appendChild(recipeCard);
    });
}

export function renderRecipeModal(recipe, container = document.getElementById('modal-recipe-content')) {
    container.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <div>
            <h2>${recipe.title}</h2>
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <button class="button save-recipe-modal" data-id="${recipe.id}">Save</button>
        </div>
    `;
}
