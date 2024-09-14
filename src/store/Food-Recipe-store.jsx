import { createContext, useReducer } from "react";

export const categoryContext = createContext({ categoryList: [], RetrieveCategories: () => {} });

function categoryListReducer(currCatList, action) {
    let newCatList = currCatList;
    if (action.type === "SHOW_CATEGORIES") {
        newCatList = action.payload;
        // newCatList = [1,2];
    }

    return newCatList;
}







function CategoryListProvider({children}) {

  const [categoryList, DispatchCatgoryList] = useReducer(categoryListReducer, []);

    function RetrieveCategories(params) {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => DispatchCatgoryList({type: 'SHOW_CATEGORIES', payload: data.categories}))
        .then(data => console.log(data))
    }

  return (
    <>
      <categoryContext.Provider value={{categoryList: categoryList, RetrieveCategories: RetrieveCategories}}>{children}</categoryContext.Provider>
    </>
  );
}

export default CategoryListProvider;
