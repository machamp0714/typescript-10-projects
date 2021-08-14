// https://10projects10hours.netlify.app/recipe-app/index.html

// API https://www.themealdb.com/api.php

// ランダムにmealを取得して、それを表示する

class RecipeApp {
  private domain = 'https://www.themealdb.com/api/json/v1/1';
  private mealsEl = document.getElementById('meals') as HTMLElement;

  static main() {
    new RecipeApp().setup();
  }

  async setup() {
    const meal = await this.fetchRandomMeal();
    this.addMeal(meal);
  }

  addMeal(meal: any) {
    const mealEl = document.createElement('div');
    mealEl.innerHTML = `
      <div class="meal">
        <div class="meal-header">
          <span class="random">${meal.strMeal}</span>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div class="meal-body">
          <h4>${meal.strMeal}</h4>
          <button class="fav-btn">
              <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    `;
    this.mealsEl.appendChild(mealEl);
  }

  async fetchRandomMeal() {
    const response = await fetch(`${this.domain}/random.php`);
    const data = await response.json();
    return data.meals[0];
  }
}

RecipeApp.main();
