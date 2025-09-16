import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testdriverai.github.io/example-vite-recipe/');
  await page.getByRole('textbox', { name: 'Recipe Title' }).fill('Pizza');
  await page.getByRole('textbox', { name: 'Ingredients (use comma to' }).fill('Cheeze, tomatoes, mushrooms');
  await page.getByRole('textbox', { name: 'Instructions' }).fill('Put everything on top of the dough and cook for 10 min');
  await page.getByRole('textbox', { name: 'Image Link (optional)' }).fill('https://testdriverai.github.io/example-vite-recipe/pizza.jpg');
  await page.getByRole('button', { name: 'Add Recipe' }).click();
  await expect(page.getByRole('img', { name: 'Pizza' })).toBeVisible();
await expect(page.locator('#root')).toContainText("Recipe BookAdd RecipePizzaIngredients:CheezetomatoesmushroomsInstructions:Put everything on top of the dough and cook for 10 minDelete Recipe");
  await page.getByRole('button', { name: 'Delete Recipe' }).click();
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - heading "Recipe Book" [level=1]
    - textbox "Recipe Title"
    - textbox "Ingredients (use comma to separate)"
    - textbox "Instructions"
    - textbox "Image Link (optional)"
    - button "Add Recipe"
    `);
});