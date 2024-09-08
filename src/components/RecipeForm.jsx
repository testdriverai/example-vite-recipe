import { useState } from 'react'
import PropTypes from 'prop-types'

RecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
}

function RecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instructions, setInstructions] = useState('')
  const [imageLink, setImageLink] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addRecipe({ title, ingredients, instructions, imageLink })
    setTitle('')
    setIngredients('')
    setInstructions('')
    setImageLink('')
  }

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <textarea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (use comma to separate)"
        required
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
        required
      />
      <textarea
        value={imageLink}
        onChange={(e) => setImageLink(e.target.value)}
        placeholder="Image Link (optional)"
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default RecipeForm