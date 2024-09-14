import Categories from "./Categories";
import FindARecipeHeading from "./FindARecipeHeading";
import { categoryContext } from "../store/Food-Recipe-store";
import { useContext } from "react";

function FindARecipe(params) {
  // const {RetrieveCategories} = useContext(categoryContext);

  // RetrieveCategories();

  return (
    <>
      <div className="Category_Window">
        <FindARecipeHeading></FindARecipeHeading>
        <div className="FindARecipeCnt">
          <Categories></Categories>
        </div>
      </div>
    </>
  );
}

export default FindARecipe;
