import PropTypes from 'prop-types';

function RecipeCard({ recipe, deleteRecipe }) {
  return (
    <div className="recipe-card">
      {recipe.imageLink && <img src={recipe.imageLink} alt={recipe.title} className="recipe-image" />}
      <div className="recipe-card-content">
        <h2>{recipe.title}</h2>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.split(',').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipe.instructions}</p>
        <button onClick={() => deleteRecipe(recipe.id)}>Delete Recipe</button>
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