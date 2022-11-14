const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const makeIngredientsItems = ingredients => {
  
  return ingredients.map(ingredient => {
    
    const liRef = document.createElement('li');
    liRef.classList.add('item');
    liRef.textContent = ingredient;

    return liRef;
  });
};

const elements = makeIngredientsItems(ingredients);

ingredientsListRef.append(...elements); 