import { createContext, useReducer } from "react";

export const Context = createContext({ categoryList: [], RetrieveCategories: () => {}, RetrieveFood: () => {}, FoodList: [] });

function categoryListReducer(currCatList, action) {
    let newCatList = currCatList;

    if (action.type === "SHOW_CATEGORIES") {
        newCatList = action.payload;
    }

    return newCatList;
}

function FoodListReducer(currfoodList, action) {
    let newfoodList = currfoodList;

    if (action.type === "SHOW_FOODS") {
        newfoodList = action.payload;
        console.log(newfoodList.length)
    }

    return newfoodList;
}







function CategoryListProvider({children}) {

  const [categoryList, DispatchCatgoryList] = useReducer(categoryListReducer, []);
  const [FoodList, DispatchFoodList] = useReducer(FoodListReducer, []);

    function RetrieveCategories(params) {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => DispatchCatgoryList({type: 'SHOW_CATEGORIES', payload: data.categories}));
    }

    function RetrieveFood(strCategory) {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${strCategory}`)
        .then(res => res.json())
        .then(data => DispatchFoodList({type: 'SHOW_FOODS', payload: data.meals}));
    }

  return (
    <>
      <Context.Provider value={{categoryList: categoryList, RetrieveCategories: RetrieveCategories, RetrieveFood: RetrieveFood, FoodList: FoodList}}>{children}</Context.Provider>
    </>
  );
}

export default CategoryListProvider;
