import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          deleteRecipe={deleteRecipe}
        />
      ))}
    </div>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      ingredients: PropTypes.string.isRequired,
      instructions: PropTypes.string.isRequired,
      imageLink: PropTypes.string,
    })
  ).isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

export default RecipeList;