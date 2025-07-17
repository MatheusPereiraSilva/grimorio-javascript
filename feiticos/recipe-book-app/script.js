const API_KEY = "a5de483c0ab442d0a4bdfaaa6ff2f01d";
const recipeList = document.querySelector('#recipe-list');

function displayRecipes(recipes){
  recipeList.innerHTML = ""
  recipes.forEach((recipe) =>{
    const recipeItemEl = document.createElement('li');
    recipeItemEl.classList.add('recipe-item');
    recipeImageEl = document.createElement('img');
    recipeImageEl.src = recipe.image;    
    recipeImageEl.alt = 'recipe image';
    recipeTitleEl = document.createElement('h2');
    recipeTitleEl.innerText = recipe.title;
    recipeIngredientsEl = document.createElement('p');
    recipeIngredientsEl.innerHTML = `
      <strong>Ingredients: </strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
    `
    recipeLinkEL = document.createElement('a');
    recipeLinkEL.href = recipe.sourceUrl;
    recipeLinkEL.innerText = 'View Recipe';
    
    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEL);
    recipeList.appendChild(recipeItemEl);
  })
}

async function getRecipes(){
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
  const data = await response.json();
  return data.recipes
}

async function init(){
  const recipes = await getRecipes();
  displayRecipes(recipes)
}
init()