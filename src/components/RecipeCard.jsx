import PropTypes from 'prop-types';

function RecipeCard({ recipe, deleteRecipe }) {
  return (
    <div className="recipe-card">
      {recipe.imageLink && (
        <div className="recipe-image-container">
          <img src={recipe.imageLink} alt={recipe.title} className="recipe-image" />
        </div>
      )}
      <div className="recipe-card-content">
        <h2 className="recipe-title">{recipe.title}</h2>
        <div className="recipe-section">
          <h3 className="section-title">Ingredients:</h3>
          <ul className="ingredient-list">
            {recipe.ingredients.split(',').map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-section">
          <h3 className="section-title">Instructions:</h3>
          <p className="instructions">{recipe.instructions}</p>
        </div>
        <button className="delete-button" onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    imageLink: PropTypes.string,
  }).isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeCard;