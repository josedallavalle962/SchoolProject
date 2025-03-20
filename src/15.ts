type Dish = {
  name: string;
  calories: number;
  ingredients: string[];
};

function getDishes(dishes: Dish[]): void {
  const dishNames = ['Pizza', 'Salad', 'Soup'];
  for (const dish of dishes) {
    if (dishNames.includes(dish.name)) {
      console.log(`${dish.name} has ${dish.calories} calories.`);
    } else {
      console.log(`${dish.name} is not on the list.`);
    }
  }
}
