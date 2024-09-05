import { useState, useEffect } from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import RecipeForm from './components/RecipeForm'

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || []
    setRecipes(storedRecipes)
  }, [])

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe]
    setRecipes(updatedRecipes)
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
  }

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index)
    setRecipes(updatedRecipes)
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes))
  }

  return (
    <div className="app">
      <h1>Recipe Book</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  )
}

export default App
