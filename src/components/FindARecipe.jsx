import { useContext } from "react";
import Categories from "./Categories";
import FindARecipeHeading from "./FindARecipeHeading";
import Foods from "./Foods";
import { Context } from "../store/Food-Recipe-store";

function FindARecipe(params) {
  const { FoodList } = useContext(Context);

  return (
    <>
      <div className="FindARecipeCnt">
        {FoodList.length === 0 && <Categories></Categories>}
        {FoodList.length !== 0 && <Foods></Foods>}
      </div>
    </>
  );
}

export default FindARecipe;
