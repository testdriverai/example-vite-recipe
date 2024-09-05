function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          {recipe.imageLink && (
            <img src={recipe.imageLink} alt={recipe.title} className="recipe-image" />
          )}
          <h2>{recipe.title}</h2>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.split('\n').map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
          <button onClick={() => deleteRecipe(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default RecipeList